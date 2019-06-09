---
title: Exoplanets
slug: exoplanets
date: June 3rd, 2019
authors: Timothy J. Whitaker
---

I came across the NASA open catalogue of exoplanets recently.[^1] It's a dataset of almost 4000 confirmed planets that are outside of our solar system. The first evidence of an exoplanet was noted in 1917, but it wasn't until 1992 that the first exoplanet was scientifically confirmed.[^2] In recent years, technological advances have spurned the discovery of a lot more and much of those findings are due to a mountain of astronomical data that is being collecting. There are sky survey projects all over the world collecting terabytes of information nightly.[^3] These projects are only going to grow larger and collect more information as time goes on, so astronomy is in a really cool place right now for data science!

## Libraries and Data

The dataset we're using is a CSV downloaded from <https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets>. It contains 3972 confirmed exoplanets and a header of commented lines detailing what each of the 144 columns mean.

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

[^1]: https://github.com/OpenExoplanetCatalogue/open_exoplanet_catalogue
[^2]: https://www.jpl.nasa.gov/news/news.php?feature=6991
[^3]: https://www.lsst.org/
