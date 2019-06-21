---
title: Exoplanets
slug: exoplanets
date: 2019-06-03
authors: Timothy J. Whitaker
---

The NASA open catalogue of exoplanets is a dataset of almost 4000 planets, dating back to an overlooked photograph from 1917.[^1] In the last 5 years, technological advancements and data collection efforts have spurned the discovery of more planets than in the previous 100 years combined. Sky survey projects all over the world collecting terabytes of information nightly.[^2] There's a ton of astronomical data to explore and I'm excited to see what we can learn from these planets and the greater universe in general.

## Libraries and Data

The exoplanet data comes from <https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets>, which contains 3972 confirmed exoplanets and 144 attributes. Since there are a lot of parameters and I want to keep this article readable, I'm going to post omitted/shortened outputs of the dataframes and attribute descriptions. If you want to print out all the information for a particular dataframe, wrap it in the function `showall(df)` or `show(df, allcols=true, allrows=true)`.[^3]

Included in the file is a header detailing the column definitions.

```julia
# COLUMN pl_hostname:    Host Name
# COLUMN pl_letter:      Planet Letter
# COLUMN pl_name:        Planet Name
# COLUMN pl_discmethod:  Discovery Method
# COLUMN pl_controvflag: Controversial Flag
# COLUMN pl_pnum:        Number of Planets in System
# ⋮
# COLUMN pl_orbper:      Orbital Period [days]
# COLUMN pl_orbsmax:     Orbit Semi-Major Axis [AU])
# COLUMN pl_orbeccen:    Eccentricity
# COLUMN pl_orbincl:     Inclination [deg]
# COLUMN st_m1:          m1 (Stromgren) [mag]
```

The libraries I'm using are CSV, DataFrames, and Gadfly, a plotting library akin to ggplot2.

```julia
using CSV, DataFrames, Gadfly

# Exoplanets downloaded from https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets
exoplanets = CSV.read("planets_2019.06.07_18.33.16.csv", comment="#")
```

```text
3972×144 DataFrame. Omitted printing of 134 columns
│ Row  │ rowid │ pl_hostname │ pl_letter │ pl_name   │ pl_discmethod   │ pl_controvflag │ pl_pnum │ pl_orbper │ pl_orbsmax │ pl_orbeccen │
│      │ Int64 │ String      │ String    │ String    │ String          │ Int64          │ Int64   │ Float64   │ Float64    │ Float64     │
├──────┼───────┼─────────────┼───────────┼───────────┼─────────────────┼────────────────┼─────────┼───────────┼────────────┼─────────────┤
│ 1    │ 1     │ 11 Com      │ b         │ 11 Com b  │ Radial Velocity │ 0              │ 1       │ 326.03    │ 1.29       │ 0.231       │
│ 2    │ 2     │ 11 UMi      │ b         │ 11 UMi b  │ Radial Velocity │ 0              │ 1       │ 516.22    │ 1.53       │ 0.08        │
⋮
│ 3970 │ 3970  │ ups And     │ c         │ ups And c │ Radial Velocity │ 0              │ 3       │ 241.258   │ 0.827774   │ 0.2596      │
│ 3971 │ 3971  │ ups And     │ d         │ ups And d │ Radial Velocity │ 0              │ 3       │ 1276.46   │ 2.51329    │ 0.2987      │
│ 3972 │ 3972  │ xi Aql      │ b         │ xi Aql b  │ Radial Velocity │ 0              │ 1       │ 136.75    │ 0.68       │ 0.0         │
```

I'm going to add another dataframe of the planets in our solar system. That way, I can plot these and use them as references. The mass and radius values are given as a ratio of Earth's measurements.

```julia
# Reference planets
planets = DataFrame(name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                    mass = [0.0553, 0.815, 1, 0.107, 317.8, 95.2, 14.5, 17.1],
                    radius = [0.383, 0.949, 1, 0.532, 11.21, 9.45, 4.01, 3.88])
```

```text
8×3 DataFrame
│ Row │ name    │ mass    │ radius  │
│     │ String  │ Float64 │ Float64 │
├─────┼─────────┼─────────┼─────────┤
│ 1   │ Mercury │ 0.0553  │ 0.383   │
⋮
│ 7   │ Uranus  │ 14.5    │ 4.01    │
│ 8   │ Neptune │ 17.1    │ 3.88    │
```

## Dataset Overview

The first thing I always do in exploratory data analysis is to look at the dataset as a whole. Calling `describe(df)` will print out general statistics of the dataframe (min, max, mean, median, etc.).

```julia
describe(exoplanets)
```

```text
144×8 DataFrame
│ Row │ variable    │ mean     │ min    │ median │ max    │ nunique │ nmissing │ eltype   │
│     │ Symbol      │ Union…   │ Any    │ Union… │ Any    │ Union…  │ Union…   │ DataType │
├─────┼─────────────┼──────────┼────────┼────────┼────────┼─────────┼──────────┼──────────┤
│ 1   │ rowid       │ 1986.5   │ 1      │ 1986.5 │ 3972   │         │          │ Int64    │
│ 2   │ pl_hostname │          │ 11 Com │        │ xi Aql │ 2963    │          │ String   │
⋮
│ 142 │ st_m1       │ 0.285146 │ 0.129  │ 0.253  │ 0.774  │         │ 3615     │ Float64  │
│ 143 │ st_c1       │ 0.359557 │ -0.013 │ 0.368  │ 0.686  │         │ 3615     │ Float64  │
│ 144 │ st_colorn   │ 5.47432  │ 0      │ 5.0    │ 83     │         │          │ Int64    │
```

```julia
describe(planets)
```

```text
3×8 DataFrame
│ Row │ variable │ mean    │ min    │ median │ max   │ nunique │ nmissing │ eltype   │
│     │ Symbol   │ Union…  │ Any    │ Union… │ Any   │ Union…  │ Nothing  │ DataType │
├─────┼──────────┼─────────┼────────┼────────┼───────┼─────────┼──────────┼──────────┤
│ 1   │ name     │         │ Earth  │        │ Venus │ 8       │          │ String   │
│ 2   │ mass     │ 55.8222 │ 0.0553 │ 7.75   │ 317.8 │         │          │ Float64  │
│ 3   │ radius   │ 3.92675 │ 0.383  │ 2.44   │ 11.21 │         │          │ Float64  │
```

### How big are the planets?

```julia
plot(layer(planets, x = :radius, y = :mass, label = :name, Geom.point, Geom.label, style(default_color = colorant"#fff", point_label_color = colorant"#fff")),
     layer(dropmissing(exoplanets, [:pl_rade, :pl_bmasse]), x = :pl_rade, y = :pl_bmasse))

```

<object data="mass-radius-scatter.svg" type="image/svg+xml">
    <param name="url" value="mass-radius-scatter.svg">
</object>

```julia
plot(layer(planets, x = :radius, y = :mass, label = :name, Geom.point, Geom.label, style(default_color = colorant"#fff", point_label_color = colorant"#fff")),
     layer(dropmissing(exoplanets, [:pl_rade, :pl_bmasse]), x = :pl_rade, y = :pl_bmasse, Geom.density2d),
     style(key_position = :none), Scale.color_continuous(colormap = x->colorant"#fe4365"))
```

<object data="mass-radius-density.svg" type="image/svg+xml">
    <param name="url" value="mass-radius-density.svg">
</object>

[^1]: https://www.jpl.nasa.gov/news/news.php?feature=6991
[^2]: https://www.lsst.org/
[^3]: https://juliadata.github.io/DataFrames.jl/stable/man/getting_started.html#Examining-the-Data-1
