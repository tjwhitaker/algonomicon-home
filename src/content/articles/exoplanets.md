---
title: Exoplanets
slug: exoplanets
date: June 3rd, 2019
authors: Timothy J. Whitaker
---

I came across the NASA open catalogue of exoplanets recently.[^1] It's a dataset of ~4000 confirmed planets that live outside of our solar system. Astronomy is in a super cool place right now.

There are monitoring projects all over the world, like the LSST project, collecting terabytes of information nightly.[^2] These projects are only going to grow larger as time goes on, which makes it a great candidate for data science. I'm super interested in astronomy as well so I'm excited to dive in to this dataset and explore the universe.

## Getting Ready

I downloaded a CSV from <https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets> that contains all 3972 confirmed exoplanets. The file contains some commented lines detailing the column meanings, and we need to ignore those when we parse the file, so we'll add the keyword argument `comment="#"`.

```julia
using CSV, DataFrames

# Exoplanets downloaded from https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets
planets = CSV.read("planets_2019.06.07_18.33.16.csv", comment = "#")
```

[^1]: https://github.com/OpenExoplanetCatalogue/open_exoplanet_catalogue
[^2]: https://www.lsst.org/
