---
title: The Higgs Boson Challenge
slug: the-higgs-boson-challenge
date: 2019-07-01
authors: Tim Whitaker
outline: |
  <ul>
    <li>Introduction</li>
    <li>Overview</li>
    <ul>
      <li>Event Distribution</li>
      <li>Particle Distribution</li>
      <li>What role do jets play?</li>
      <li>Missing Mass and Energy</li>
      <li>Correlations</li>
    </ul>
    <li>Building the Model</li>
    <ul>
      <li>Evaluation Metric</li>
      <li>Preparing the Data</li>
      <li>Feature Selection and Engineering</li>
      <li>Training</li>
      <li>Testing</li>
    </ul>
    <li>Conclusion</li>
  </ul>
---

In 2012, the ATLAS experiment at the Large Hadron Collider in Switzerland, discovered a new particle called the Higgs Boson. This discovery was a breakthrough in particle physics, as the Higgs Boson was long theorized to exist, but almost impossible to detect. It's small, has no spin or electrical charge, and is so unstable that it decays into other particles almost instantly.[^1] After the discovery, the media dubbed the Higgs Boson "the god particle" due to its role in generating mass as other particles interact with the Higgs field.

## Introduction

The Large Hadron Collider is a machine that collides protons together at high speed. When they collide, they produce a small explosion and the LHC measures and tracks the resulting particles.

Through this process, the higgs boson may or may not appear. It decays so fast that the LHC can not observe it directly. By looking at the final state of the particles, we can perform a kind of backtracking and deduce if the particles were the result of a higgs boson decay.

In this dataset, every row corresponds to a collision event. Every event contains one lepton, one hadronic tau, and a variable number of jets. We're given the measured momenta of these particles and using these values and some special features derived by the physicists at the LHC, we are going to try to detect whether an event contained a higgs boson or not.

## Overview

The training and testing datasets come from <https://www.kaggle.com/c/higgs-boson/data>. They contain 250,000 and 550,000 instances respectively. Each feature of each event starts with either PRI or DER, standing for primitive or derived. The primitive features are raw measurements obtained directly from the collision and derived features are attributes computed from that primitive data.

The folks at ATLAS have provided a great rundown of particle physics for non physicists here <http://opendata.cern.ch/record/329>.

```julia
using CSV, DataFrames, Gadfly

# Dataset downloaded from https://www.kaggle.com/c/higgs-boson/data
train = CSV.read("train.csv")
```

```julia
@show describe(train)
```

```text
│ Row │ variable                    │ mean        │ min        │ median  │ max     │ nunique │ nmissing │ eltype   │
│     │ Symbol                      │ Union…      │ Any        │ Union…  │ Any     │ Union…  │ Nothing  │ DataType │
├─────┼─────────────────────────────┼─────────────┼────────────┼─────────┼─────────┼─────────┼──────────┼──────────┤
│ 1   │ EventId                     │ 2.25e5      │ 100000     │ 2.25e5  │ 349999  │         │          │ Int64    │
│ 2   │ DER_mass_MMC                │ -49.0231    │ -999.0     │ 105.012 │ 1192.03 │         │          │ Float64  │
│ 3   │ DER_mass_transverse_met_lep │ 49.2398     │ 0.0        │ 46.524  │ 690.075 │         │          │ Float64  │
│ 4   │ DER_mass_vis                │ 81.182      │ 6.329      │ 73.752  │ 1349.35 │         │          │ Float64  │
│ 5   │ DER_pt_h                    │ 57.896      │ 0.0        │ 38.4675 │ 2835.0  │         │          │ Float64  │
│ 6   │ DER_deltaeta_jet_jet        │ -708.421    │ -999.0     │ -999.0  │ 8.503   │         │          │ Float64  │
│ 7   │ DER_mass_jet_jet            │ -601.237    │ -999.0     │ -999.0  │ 4974.98 │         │          │ Float64  │
│ 8   │ DER_prodeta_jet_jet         │ -709.357    │ -999.0     │ -999.0  │ 16.69   │         │          │ Float64  │
│ 9   │ DER_deltar_tau_lep          │ 2.3731      │ 0.208      │ 2.4915  │ 5.684   │         │          │ Float64  │
│ 10  │ DER_pt_tot                  │ 18.9173     │ 0.0        │ 12.3155 │ 2835.0  │         │          │ Float64  │
│ 11  │ DER_sum_pt                  │ 158.432     │ 46.104     │ 120.665 │ 1852.46 │         │          │ Float64  │
│ 12  │ DER_pt_ratio_lep_tau        │ 1.43761     │ 0.047      │ 1.28    │ 19.773  │         │          │ Float64  │
│ 13  │ DER_met_phi_centrality      │ -0.128305   │ -1.414     │ -0.356  │ 1.414   │         │          │ Float64  │
│ 14  │ DER_lep_eta_centrality      │ -708.985    │ -999.0     │ -999.0  │ 1.0     │         │          │ Float64  │
│ 15  │ PRI_tau_pt                  │ 38.7074     │ 20.0       │ 31.804  │ 764.408 │         │          │ Float64  │
│ 16  │ PRI_tau_eta                 │ -0.010973   │ -2.499     │ -0.023  │ 2.497   │         │          │ Float64  │
│ 17  │ PRI_tau_phi                 │ -0.00817107 │ -3.142     │ -0.033  │ 3.142   │         │          │ Float64  │
│ 18  │ PRI_lep_pt                  │ 46.6602     │ 26.0       │ 40.516  │ 560.271 │         │          │ Float64  │
│ 19  │ PRI_lep_eta                 │ -0.0195075  │ -2.505     │ -0.045  │ 2.503   │         │          │ Float64  │
│ 20  │ PRI_lep_phi                 │ 0.043543    │ -3.142     │ 0.086   │ 3.142   │         │          │ Float64  │
│ 21  │ PRI_met                     │ 41.7172     │ 0.109      │ 34.802  │ 2842.62 │         │          │ Float64  │
│ 22  │ PRI_met_phi                 │ -0.0101192  │ -3.142     │ -0.024  │ 3.142   │         │          │ Float64  │
│ 23  │ PRI_met_sumet               │ 209.797     │ 13.678     │ 179.739 │ 2003.98 │         │          │ Float64  │
│ 24  │ PRI_jet_num                 │ 0.979176    │ 0          │ 1.0     │ 3       │         │          │ Int64    │
│ 25  │ PRI_jet_leading_pt          │ -348.33     │ -999.0     │ 38.96   │ 1120.57 │         │          │ Float64  │
│ 26  │ PRI_jet_leading_eta         │ -399.254    │ -999.0     │ -1.872  │ 4.499   │         │          │ Float64  │
│ 27  │ PRI_jet_leading_phi         │ -399.26     │ -999.0     │ -2.093  │ 3.141   │         │          │ Float64  │
│ 28  │ PRI_jet_subleading_pt       │ -692.381    │ -999.0     │ -999.0  │ 721.456 │         │          │ Float64  │
│ 29  │ PRI_jet_subleading_eta      │ -709.122    │ -999.0     │ -999.0  │ 4.5     │         │          │ Float64  │
│ 30  │ PRI_jet_subleading_phi      │ -709.119    │ -999.0     │ -999.0  │ 3.142   │         │          │ Float64  │
│ 31  │ PRI_jet_all_pt              │ 73.0646     │ -0.0       │ 40.5125 │ 1633.43 │         │          │ Float64  │
│ 32  │ Weight                      │ 1.64677     │ 0.00150187 │ 1.15619 │ 7.82254 │         │          │ Float64  │
│ 33  │ Label                       │             │ b          │         │ s       │ 2       │          │ String   │
```

The "-999.0" values scattered throughout the dataset represent missing or meaningless fields. To ease data exploration, we're creating a working dataframe with the columns containing missing data removed.

```julia
# Working dataframe with extraneous columns removed
missingcols = [
  :EventId,
  :DER_mass_MMC,
  :DER_deltaeta_jet_jet,
  :DER_mass_jet_jet,
  :DER_prodeta_jet_jet,
  :DER_lep_eta_centrality,
  :PRI_jet_leading_pt,
  :PRI_jet_leading_eta,
  :PRI_jet_leading_phi,
  :PRI_jet_subleading_pt,
  :PRI_jet_subleading_eta,
  :PRI_jet_subleading_phi
]

working = deletecols(train, missingcols)
```

### Event Distribution

Each event in the training set contains a label that tells us whether the event contained a higgs boson or not. By splitting up our working set into groups based on the label, we can look at the distributions and patterns of the features in those groups.

```julia
signal, background = groupby(working, :Label)
```

```text
First Group (85667 rows): Label = "s". Omitted printing of 27 columns
│ Row   │ EventId │ DER_mass_MMC │ DER_mass_transverse_met_lep │ DER_mass_vis │ DER_pt_h │ DER_deltaeta_jet_jet │
│       │ Int64   │ Float64⍰     │ Float64                     │ Float64      │ Float64  │ Float64⍰             │
├───────┼─────────┼──────────────┼─────────────────────────────┼──────────────┼──────────┼──────────────────────┤
│ 1     │ 100000  │ 138.47       │ 51.655                      │ 97.827       │ 27.98    │ 0.91                 │
│ 2     │ 100006  │ 148.754      │ 28.862                      │ 107.782      │ 106.13   │ 0.733                │
⋮
│ 85665 │ 349991  │ 133.457      │ 77.54                       │ 88.989       │ 69.65    │ missing              │
│ 85666 │ 349993  │ 130.075      │ 3.918                       │ 66.781       │ 77.369   │ 0.936                │
│ 85667 │ 349997  │ 105.457      │ 60.526                      │ 75.839       │ 39.757   │ missing              │
⋮
Last Group (164333 rows): Label = "b". Omitted printing of 27 columns
│ Row    │ EventId │ DER_mass_MMC │ DER_mass_transverse_met_lep │ DER_mass_vis │ DER_pt_h │ DER_deltaeta_jet_jet │
│        │ Int64   │ Float64⍰     │ Float64                     │ Float64      │ Float64  │ Float64⍰             │
├────────┼─────────┼──────────────┼─────────────────────────────┼──────────────┼──────────┼──────────────────────┤
│ 1      │ 100001  │ 160.937      │ 68.768                      │ 103.235      │ 48.146   │ missing              │
│ 2      │ 100002  │ missing      │ 162.172                     │ 125.953      │ 35.635   │ missing              │
⋮
│ 164331 │ 349996  │ missing      │ 58.179                      │ 68.083       │ 22.439   │ missing              │
│ 164332 │ 349998  │ 94.951       │ 19.362                      │ 68.812       │ 13.504   │ missing              │
│ 164333 │ 349999  │ missing      │ 72.756                      │ 70.831       │ 7.479    │ missing              │
```

The ratio of signal to background events in the training set is about 1:2. The distributions of the features are pretty much the same except for the transverse momentum features. My hunch is that these fields will end up being important in a machine learning model.

<object data="sb-stats.svg" type="image/svg+xml">
  <param name="url" value="sb-stats.svg">
</object>

```julia
# Signal and Background boxplot stats
function boxplot_stats(a)
  q1 = quantile(a, 0.25)
  q2 = quantile(a, 0.5)
  q3 = quantile(a, 0.75)

  lf = q1 - (1.5 * (q3 - q1))
  uf = q3 + (1.5 * (q3 - q1))

  return (lf, q1, q2, q3, uf)
end

# Construct combined dataframe by looping over columns
sb_stats = DataFrame(name=[], label=[], lf=[], lh=[], m=[], uh=[], uf=[])

for i in 1:20
  stats = boxplot_stats(signal[:, i])
  push!(sb_stats, [names(signal)[i], "s", stats...])

  stats = boxplot_stats(background[:, i])
  push!(sb_stats, [names(background)[i], "b", stats...])
end
```

### Particle Distribution

The ATLAS detector at the LHC is the largest particle detector in the world. It measures the 3 dimensional final state properties of the collision through a series of concentric cylinders around the collision point.[^6] Here's a plot of each hadronic tau and lepton for every event in the training set.

<video controls>
  <source src="particles-3d.mp4" type="video/mp4">
  Video not supported.
</video>

```julia
using Makie

tau_coordinates = Point3f0[]
lep_coordinates = Point3f0[]

function cartesian(pt, ϕ, η)
  x = pt * cos(ϕ)
  y = pt * sin(ϕ)
  z = pt * sinh(η)

  return (x, y, z)
end

for row in eachrow(train)
  push!(tau_coordinates, cartesian(row[:PRI_tau_pt], row[:PRI_tau_phi], row[:PRI_tau_eta]))
  push!(lep_coordinates, cartesian(row[:PRI_lep_pt], row[:PRI_lep_phi], row[:PRI_lep_eta]))
end

scene = Scene(resolution=(1200, 800), backgroundcolor="#222831")
scatter!(scene, tau_coordinates, markersize=5, color="#fe4365")
scatter!(scene, lep_coordinates, markersize=5, color="#eca25c")

scale!(scene, 2, 2, 2)
scene.center = false

record(scene, "particles-3d.mp4", 1:200) do i
  rotate_cam!(scene, 0.01, 0.0, 0.0)
end

```

This density plot shows the distribution of those particles in the transverse plane. Anything that escapes down the longitudinal axis is not detectable, and thus we see most particles end up in a small ring around the z-axis.

<object data="coordinate-density.svg" type="image/svg+xml">
  <param name="url" value="coordinate-density.svg">
</object>

```julia
coordinates = DataFrame(x=[], y=[], z=[])

for row in eachrow(working)
  push!(coordinates, cartesian(row[:PRI_tau_pt], row[:PRI_tau_phi], row[:PRI_tau_eta]))
  push!(coordinates, cartesian(row[:PRI_lep_pt], row[:PRI_lep_phi], row[:PRI_lep_eta]))
end

plot(
  coordinates,
  x = :x,
  y = :y,
  Geom.density2d,
  Scale.color_continuous(colormap=x->get(ColorSchemes.blackbody, x))
)
```

### What role do jets play?

A jet is a narrow stream of particles that occur as the result of the hadronization of a quark or gluon.[^7] Every event in our dataset has either 0, 1, 2, or 3+ jets. These jets are important as they give us crucial insight into the energy of the system. In our training set, events with two jets show the highest probability to contain a higgs boson.

<object data="num-jets.svg" type="image/svg+xml">
  <param name="url" value="num-jets.svg">
</object>

```julia
jet_groups = groupby(working, :PRI_jet_num, sort=true)
jet_df = DataFrame(num_jets=[], num_s=[], num_b=[])

for group in jet_groups
  num_jets = first(group[:PRI_jet_num])
  num_s = count(group[:Label] .== "s")
  num_b = count(group[:Label] .== "b")

  push!(jet_df, (num_jets, num_s, num_b))

  println("$num_jets: $(num_s / num_b)")

  # Ratio of signal to background ^
  # 0: 0.3425377245669905
  # 1: 0.5560460729622346
  # 2: 1.0441874619598295
  # 3: 0.4361433292295730
end

plot(
  stack(jet_df, [:num_s, :num_b]),
  x = :num_jets,
  y = :value,
  color = :variable,
  Geom.bar(position = :dodge)
)
```

### Missing Mass and Energy

Energy in the ATLAS detector can escape detection. The two primary ways this happens is through the neutrino, a small fundamental particle that doesn't strongly interact with matter, and through the longitudinal axis, where the machine doesn't have detection capabilities. Using the law of the conservation of momentum, physicists can infer properties of the missing energy and use that to estimate the candidate mass of a Higgs Boson in any given event.

<object data="transverse-energy.svg" type="image/svg+xml">
  <param name="url" value="transverse-energy.svg">
</object>

<object data="higgs-invariant-mass.svg" type="image/svg+xml">
  <param name="url" value="higgs-invariant-mass.svg">
</object>


### Correlations

The features that are most correlated to each other are the tau phi, tau eta, lepton phi and lepton eta angles, as well as a couple of derived features that depend on those. Due to the missing values, we removed most of the jet features, which are probably strongly correlated with the related jet derived features.

<object data="correlations.svg" type="image/svg+xml">
  <param name="url" value="correlations.svg">
</object>

```julia
correlations = cor(Matrix(working[:, 1:20]))

spy(
  correlations,
  Scale.y_discrete(labels=i->names(working[:, 1:20])[i]),
  Guide.ylabel(nothing),
  Guide.colorkey(title="Correlation\nCoefficient  "),
  Guide.xticks(label=false),
  Guide.xlabel(nothing)
)
```

## Building The Model

The goal of this project is to classify events into signal or background. Using our exploration as a guide, we're going to build a model that will give us the probability that a given event produced a Higgs Boson.

### Evaluation Metric

The evaluation metric given to us by ATLAS is the approximate median significance. The AMS is a loss function that looks to reduce our false discovery rate. The goal for our model is to estimate with a high confidence that any predicted signal event is in fact a signal.

$$
AMS = \sqrt{2\left((s+b+b_r) \log \left(1 + \frac{s}{b + b_r}\right)-s\right)}\\
$$

$$
s = true\ positive\ rate\\
b = false\ positive\ rate\\
b_r = 10
$$


### Preparing the Data

We're loading our data here and splitting it into subsets of features, labels, and weights.

```julia
using CSV, DataFrames, Statistics, XGBoost

train = CSV.read("higgs-boson/train.csv")
test = CSV.read("higgs-boson/test.csv")
```

### Feature Selection and Engineering

I came across a bunch of ideas for feature engineering after reading some post competition blog posts. Some people used transformations and combinations to get models trained on upwards of 700 features. Some people got great results on models trained without any extra features at all.

The first place finisher, Gabor Melis used 10 extra features. 5 based on the open angles between particles and 5 based around mass.[^8] For our model, I'm going to keep it simple and add the open angle features. Due to the rotational symmetry around the z-axis, we can drop the raw phi features after adding our open angle features.

```julia
# Absolute differences of phi
delta_phi(ϕ1, ϕ2) = (ϕ1 == -999 || ϕ2 == -999) ? -999.0 : abs(ϕ1 - ϕ2)

train[:ALGO_delta_phi_tau_lep] = delta_phi.(train[:PRI_tau_phi], train[:PRI_lep_phi])
train[:ALGO_delta_phi_tau_jet1] = delta_phi.(train[:PRI_tau_phi], train[:PRI_jet_leading_phi])
train[:ALGO_delta_phi_tau_jet2] = delta_phi.(train[:PRI_tau_phi], train[:PRI_jet_subleading_phi])
train[:ALGO_delta_phi_lep_jet1] = delta_phi.(train[:PRI_lep_phi], train[:PRI_jet_leading_phi])
train[:ALGO_delta_phi_lep_jet2] = delta_phi.(train[:PRI_lep_phi], train[:PRI_jet_subleading_phi])
train[:ALGO_delta_phi_jet1_jet2] = delta_phi.(train[:PRI_jet_leading_phi], train[:PRI_jet_subleading_phi])

test[:ALGO_delta_phi_tau_lep] = delta_phi.(test[:PRI_tau_phi], test[:PRI_lep_phi])
test[:ALGO_delta_phi_tau_jet1] = delta_phi.(test[:PRI_tau_phi], test[:PRI_jet_leading_phi])
test[:ALGO_delta_phi_tau_jet2] = delta_phi.(test[:PRI_tau_phi], test[:PRI_jet_subleading_phi])
test[:ALGO_delta_phi_lep_jet1] = delta_phi.(test[:PRI_lep_phi], test[:PRI_jet_leading_phi])
test[:ALGO_delta_phi_lep_jet2] = delta_phi.(test[:PRI_lep_phi], test[:PRI_jet_subleading_phi])
test[:ALGO_delta_phi_jet1_jet2] = delta_phi.(test[:PRI_jet_leading_phi], test[:PRI_jet_subleading_phi])
 
# Drop phi due to invariant rotational symmetry
train = deletecols(train, [:PRI_tau_phi, :PRI_lep_phi, :PRI_met_phi, :PRI_jet_leading_phi, :PRI_jet_subleading_phi])
test = deletecols(test, [:PRI_tau_phi, :PRI_lep_phi, :PRI_met_phi, :PRI_jet_leading_phi, :PRI_jet_subleading_phi])
```

### Training

The most popular and powerful models in machine learning competitions are ensembles of neural networks or gradient boosting trees. Neural networks tend to do great when the input data is complex or irregular, like images or language, and gradient boosting trees work well with organized and tabular data.

XGBoost is a popular implementation of gradient boosting trees which I found to be fast, easy to use and memory efficient. We'll use XGBoost for this article, and in less than 20 lines of code, we can train a model that is capable of being compeitive on the leaderboard. The documetation, https://xgboost.readthedocs.io/en/latest/, is helpful if you want to learn more about gradient boosting and what goes in to tuning the model.

```julia
train_w = convert(Vector, train[:Weight])
train_x = convert(Matrix, deletecols(train, [:EventId, :Weight, :Label]))
train_y = convert(Vector, map(i -> i == "s" ? 1 : 0, train[:Label]))

dtrain = DMatrix(train_x, false, -999.0, weight=train_w, label=train_y)
dtest = DMatrix(convert(Matrix, deletecols(test, [:EventId])), false, -999.0)

rounds = 3000

param = Dict(
  "max_depth" => 9,
  "eta" => 0.01,
  "sub_sample" => 0.9,
  "objective" => "binary:logitraw"
)

model = xgboost(
  dtrain,
  rounds,
  param=param,
  metrics=["ams@0.15", "auc"]
)
```

### Testing

The kaggle competition expects our submission to be a csv file with the columns EventId, RankOrder, and Class. After calling predict() on the test matrix we created earlier, it will return a vector of logits, or log odds that the item belongs to the signal class.[^9] By calculating the rank of the logits, we'll take that ordering and map the top 15% to the class 's' and the rest to 'b'.

```julia
function rank(xs)
  ranks = Array{Int64}(undef, length(xs))
  order = sortperm(xs)

  for i = 1:length(xs)
    ranks[order[i]] = i
  end

  return ranks
end

predictions = predict(model, dtest)
rank_order = rank(predictions)
labels = map(x -> x > .85 * size(test, 1) ? 's' : 'b', rank_order)

submission = DataFrame(EventId=test[:EventId], RankOrder=rank_order, Class=labels)
CSV.write("submission.csv", submission)
```

```text
Final Score: 3.61149
```

## Conclusion

I had a lot of fun working on The Higgs Boson Challenge! Particle physics is so overwhelming at first but rewarding when the pieces start to come together. It's so cool to be able to work on and play with the data from one of the greatest achievements in physics in the last century.

Hope you all enjoyed this article! Looking forward to the next one!

[^1]: https://en.wikipedia.org/wiki/Higgs_boson
[^2]: http://opendata.cern.ch/record/329
[^3]: http://opendata.cern.ch/record/328
[^4]: https://github.com/dmlc/xgboost/blob/master/demo/kaggle-higgs/higgs-cv.py
[^5]: https://www.kaggle.com/c/higgs-boson/overview/evaluation
[^6]: https://en.wikipedia.org/wiki/ATLAS_experiment
[^7]: https://en.wikipedia.org/wiki/Jet_(particle_physics)
[^8]: http://proceedings.mlr.press/v42/meli14.pdf
[^9]: https://en.wikipedia.org/wiki/Logit