---
title: The Higgs Boson Challenge
slug: the-higgs-boson-challenge
date: 2019-07-01
authors: Timothy J. Whitaker
outline: |
    <ul>
        <li>Introduction</li>
    </ul>
---

In 2012, the ATLAS experiment at the Large Hadron Collider in Switzerland, discovered a new particle called the Higgs Boson. This particle, originally theorized to exist in 1964, is difficult to detect. It has no spin, electrical charge, or color charge. It's super unstable and decays into other particles almost instanatly.[^1]

## Introduction

The large hadron collider is a machine that collides bunches of protons at high speed. When they collide, they produce a small firework in which part of the kinetic energy of the collision creates new particles. Some of the particles created through this collision (including the Higgs Boson) decay so rapidly that we can't observe them directly. What we can observe is the surviving particles, or the final state. The final state properties of these particles include the type (electron, photon, muon, etc.), the energy, and the 3D direction. Through these measurements, the properties are able to infer the decayed parent particles and this inference chain continues until reaching the heaviest primary particles.

The particles of interest for this challenge are electrons, muons, hadronic tau, jets and missing transverse energy. Electrons and muons live long enough for the detector to read, so their energy and direction can be measured directly. These are both categorized as leptons in the dataset according to the standard model. Taus decay almost immediately into either and electron and two neutrinos, a muon and two neutrinos, or a bunch of charged particles and one neutrino. The resulting bundle of hadrons in the last case is a pseudo-particle called a hadronic tau. Jets are another pseudo particle which results from a high energy quark or gluon. The measured momenta of all the particles of the event is the primary information provided for this challenge.[^2]

All events in both the training and test dataset were selected to have only one electron or muon, and only one hadronic tau. So the goal for this challenge is to classify whether the event showed that these particles decayed from a higgs or not.


## Overview

The data comes from <https://www.kaggle.com/c/higgs-boson/data>, split into train and test datasets. They contain 250,000 and 550,000 instances respectively, each with 33 attributes. Most attributes are prefixed with either DER or PRI. These stand for PRImitive (raw data obtained directly from the collision measurements) and DERived (features computed from primitive data by physicists at ATLAS). Descriptions of all the attributes are here <http://opendata.cern.ch/record/328> and a nice pdf of documentation for non-physiscists on the higgs challenge is here <http://opendata.cern.ch/record/329>.

Some values are not computable or are meaningless in the context of the attribute. Those values are represented as -999.0 in the dataset. I'm going to convert those to missing values instead as we load the dataset in order to make it clear that it shouldn't factor in to numerical computations.

```julia
using CSV, DataFrames, Gadfly

# Dataset downloaded from https://www.kaggle.com/c/higgs-boson/data
train = CSV.read("train.csv", missingstring="-999.0")
```

```julia
@show describe(train)
```

```text
│ Row │ variable                    │ mean        │ min        │ median  │ max     │ nunique │ nmissing │ eltype   │
│     │ Symbol                      │ Union…      │ Any        │ Union…  │ Any     │ Union…  │ Union…   │ DataType │
├─────┼─────────────────────────────┼─────────────┼────────────┼─────────┼─────────┼─────────┼──────────┼──────────┤
│ 1   │ EventId                     │ 2.25e5      │ 100000     │ 2.25e5  │ 349999  │         │          │ Int64    │
│ 2   │ DER_mass_MMC                │ 121.859     │ 9.044      │ 112.406 │ 1192.03 │         │ 38114    │ Float64  │
│ 3   │ DER_mass_transverse_met_lep │ 49.2398     │ 0.0        │ 46.524  │ 690.075 │         │          │ Float64  │
│ 4   │ DER_mass_vis                │ 81.182      │ 6.329      │ 73.752  │ 1349.35 │         │          │ Float64  │
│ 5   │ DER_pt_h                    │ 57.896      │ 0.0        │ 38.4675 │ 2835.0  │         │          │ Float64  │
│ 6   │ DER_deltaeta_jet_jet        │ 2.40374     │ 0.0        │ 2.107   │ 8.503   │         │ 177457   │ Float64  │
│ 7   │ DER_mass_jet_jet            │ 371.783     │ 13.602     │ 225.885 │ 4974.98 │         │ 177457   │ Float64  │
│ 8   │ DER_prodeta_jet_jet         │ -0.821688   │ -18.066    │ -0.244  │ 16.69   │         │ 177457   │ Float64  │
│ 9   │ DER_deltar_tau_lep          │ 2.3731      │ 0.208      │ 2.4915  │ 5.684   │         │          │ Float64  │
│ 10  │ DER_pt_tot                  │ 18.9173     │ 0.0        │ 12.3155 │ 2835.0  │         │          │ Float64  │
│ 11  │ DER_sum_pt                  │ 158.432     │ 46.104     │ 120.665 │ 1852.46 │         │          │ Float64  │
│ 12  │ DER_pt_ratio_lep_tau        │ 1.43761     │ 0.047      │ 1.28    │ 19.773  │         │          │ Float64  │
│ 13  │ DER_met_phi_centrality      │ -0.128305   │ -1.414     │ -0.356  │ 1.414   │         │          │ Float64  │
│ 14  │ DER_lep_eta_centrality      │ 0.45829     │ 0.0        │ 0.454   │ 1.0     │         │ 177457   │ Float64  │
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
│ 25  │ PRI_jet_leading_pt          │ 84.8221     │ 30.0       │ 65.561  │ 1120.57 │         │ 99913    │ Float64  │
│ 26  │ PRI_jet_leading_eta         │ -0.00327459 │ -4.499     │ 0.0     │ 4.499   │         │ 99913    │ Float64  │
│ 27  │ PRI_jet_leading_phi         │ -0.0123928  │ -3.142     │ -0.033  │ 3.141   │         │ 99913    │ Float64  │
│ 28  │ PRI_jet_subleading_pt       │ 57.6795     │ 30.0       │ 47.902  │ 721.456 │         │ 177457   │ Float64  │
│ 29  │ PRI_jet_subleading_eta      │ -0.0118453  │ -4.5       │ -0.01   │ 4.5     │         │ 177457   │ Float64  │
│ 30  │ PRI_jet_subleading_phi      │ -0.00158229 │ -3.142     │ -0.002  │ 3.142   │         │ 177457   │ Float64  │
│ 31  │ PRI_jet_all_pt              │ 73.0646     │ -0.0       │ 40.5125 │ 1633.43 │         │          │ Float64  │
│ 32  │ Weight                      │ 1.64677     │ 0.00150187 │ 1.15619 │ 7.82254 │         │          │ Float64  │
│ 33  │ Label                       │             │ b          │         │ s       │ 2       │          │ String   │
```

Due to the missing data related to jets, I'm creating a working set to use for analysis.

```julia
# Working dataframe with extraneous columns removed
missingcols = [:EventId,
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
               :PRI_jet_subleading_phi]

working = deletecols(train, missingcols)
```

## Exploratory Data Analysis

### Signal vs Background Distribution

The distribution of signal to background events (or higgs confirmed events to non-higgs) of the training set shows a near 1:2 ratio.

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
By calculating the boxplot statistics for both the signal and background sets, we can observe the general spread of the data. It looks like the distributions are pretty close on most columns, except for a few columns that the signals tend to be significantly different. These are the :DER\_mass\_transverse\_met\_lep, :DER\_pt\_h, :DER\_sum\_pt, :PRI\_met\_sumet, and :PRI\_jet\_all\_pt. All of these fields correspond with transverse momentum. My hunch is that these fields will end up being the most important in a machine learning model.

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
sb_stats = DataFrame(name = [], label = [], lf = [], lh = [], m = [], uh = [], uf = [])

for i in 1:20
    stats = boxplot_stats(signal[:, i])
    push!(sb_stats, [names(signal)[i], "s", stats...])

    stats = boxplot_stats(background[:, i])
    push!(sb_stats, [names(background)[i], "b", stats...])
end
```

### Where are the particles detected?

Here's a density chart showing where the detector measures the final state particles. The detector can't measure anything directly along the z axis, which is why we see a hole there. Most particles are detected in a small ring around the center axis.

<object data="coordinate-density.svg" type="image/svg+xml">
  <param name="url" value="coordinate-density.svg">
</object>

```julia
# Locations of particles
function cartesian(pt, ϕ, η)
    x = pt * cos(ϕ)
    y = pt * sin(ϕ)
    z = pt * sinh(η)

    return (x, y, z)
end

coordinates = DataFrame(x = [], y = [], z = [])

for row in eachrow(working)
    push!(coordinates, cartesian(row[:PRI_tau_pt], row[:PRI_tau_phi], row[:PRI_tau_eta]))
    push!(coordinates, cartesian(row[:PRI_lep_pt], row[:PRI_lep_phi], row[:PRI_lep_eta]))
end

coordinate_density = plot(coordinates, x = :x, y = :y, Geom.density2d,
    Scale.color_continuous(colormap = x->get(ColorSchemes.blackbody, x)))
```

### What role do jets play?

The jets stand out as an attribute worth special attention. While we're guaranteed that each event will have 1 lepton and 1 hadronic tau, the number of jets can vary from 0 to 3+. While the number of signals is pretty constant with 0, 1, and 2 jets, it severely drops off at 3+. The ratio of signals to background hits is highest (almost a 1:1 ratio) at 2 jets.

<object data="num-jets.svg" type="image/svg+xml">
  <param name="url" value="num-jets.svg">
</object>

```julia
jet_groups = groupby(working, :PRI_jet_num, sort = true)
jet_df = DataFrame(num_jets = [], num_s = [], num_b = [])

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

plot(stack(jet_df, [:num_s, :num_b]), x = :num_jets, y = :value, color = :variable, Geom.bar(position = :dodge))

```

### Mass and Energy

Not all energy can be detected in a particle collider. Some of it is carried by neutrinos that do not interact with electromagnetic or strong forces. Using the law of the conservation of momentum, the missing energy in the transverse plane (cross section of the hadron collider) can be calculated. 


<object data="transverse-energy.svg" type="image/svg+xml">
  <param name="url" value="transverse-energy.svg">
</object>

<object data="higgs-invariant-mass.svg" type="image/svg+xml">
  <param name="url" value="higgs-invariant-mass.svg">
</object>


### Correlations

<object data="correlations.svg" type="image/svg+xml">
  <param name="url" value="correlations.svg">
</object>

```julia
correlations = cor(Matrix(working[:, 1:20]))

spy(correlations, Scale.y_discrete(labels = i->names(working[:, 1:20])[i]),
    Guide.ylabel(nothing), Guide.colorkey(title = "Correlation\nCoefficient  "),
    Guide.xticks(label = false), Guide.xlabel(nothing))
```

## Predicting Signal States

Now that we've finished our exploration of the dataset, we can build a model now to predict signal events.

### Feature Selection and Engineering

Many people reported great results without doing any feature engineering at all. This is due to the fact that the derived features included in the dataset are actually pretty good. I did get some ideas for some features to play with though after reading through some post-competition blog posts so I'll lay those out below.

### Phi Angles

The top finisher dropped the phi angles completely. The idea is that the angles in the transverse plane show invariant rotational symmetry, and thus have little impact on the performance of the model. I think it makes sense to drop these angles, and include instead the angles of the particles in relation to each other. For instance, it may not matter whether a lepton ends up on the top or bottom of the detector. But it may matter that the tau and lepton end up on opposite sides of the detector as opposed to right next to each other.

Calculate the absolute value of the difference of the phi angles with respect to each other. 

### Eta Angles

### Transverse Mass Ratios

### Normalizing

mean of 0 and std dev of 1

missing values represented as 0

### XGBoost

Gradient boosting trees are a popular and powerful algorithm used to crush structured, tabular datasets. XGBoost is probably the most popular implementation and has won a lot of machine learning competitions.

[^1]: https://en.wikipedia.org/wiki/Higgs_boson
[^2]: http://opendata.cern.ch/record/329
[^3]: http://opendata.cern.ch/record/328