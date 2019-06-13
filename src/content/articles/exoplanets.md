---
title: Exoplanets
slug: exoplanets
date: June 3rd, 2019
authors: Timothy J. Whitaker
---

The NASA open catalogue of exoplanets is a dataset of almost 4000 planets, dating back to an overlooked photograph from 1917.[^1] In the last 5 years, technological advances and data collection efforts have spurned the discovery of more planets than in the previous 100 years combined. Sky survey projects all over the world collecting terabytes of information nightly and these projects are going to grow larger and collect more information as time goes on.[^2]

## Libraries and Data

I downloaded the CSV from <https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets>, which contains 3972 confirmed exoplanets and 144 attributes for each. Since there are a lot of attributes and I want to make this article readable, I'm going to be posting omitted/shortened outputs of the dataframes and attribute descriptions. If you want to print out all the information for a particular dataframe, wrap it in the function `showall(df)` or `show(df, allcols=true, allrows=true)`.[^3]

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

Now I'm loading the data into a DataFrame using the CSV package. This is a good time to load some other libraries that we'll end up using in the future. Gadfly is a plotting library akin to ggplot2 and statistics is self explanatory.

```julia
using CSV, DataFrames, Gadfly, Statistics

# Exoplanets downloaded from https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets
planets = CSV.read("planets_2019.06.07_18.33.16.csv", comment="#")
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

## Dataset Overview

Now that we have the exoplanets loaded, I'm going to start looking at pieces that might be interesting to visualize. A good first step is to look at a single row in its entirety and to describe our whole dataframe with general statistical functions (min, max, mean, median, etc.).

```julia
# First instance in the dataframe
first(planets)
```

```text
DataFrameRow. Omitted printing of 134 columns
│ Row │ rowid │ pl_hostname │ pl_letter │ pl_name  │ pl_discmethod   │ pl_controvflag │ pl_pnum │ pl_orbper │ pl_orbsmax │ pl_orbeccen │
│     │ Int64 │ String      │ String    │ String   │ String          │ Int64          │ Int64   │ Float64⍰  │ Float64⍰   │ Float64⍰    │
├─────┼───────┼─────────────┼───────────┼──────────┼─────────────────┼────────────────┼─────────┼───────────┼────────────┼─────────────┤
│ 1   │ 1     │ 11 Com      │ b         │ 11 Com b │ Radial Velocity │ 0              │ 1       │ 326.03    │ 1.29       │ 0.231       │
```

```julia
# Statstical details of the entire dataset
describe(planets)
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

[^1]: https://www.jpl.nasa.gov/news/news.php?feature=6991
[^2]: https://www.lsst.org/
[^3]: https://juliadata.github.io/DataFrames.jl/stable/man/getting_started.html#Examining-the-Data-1
