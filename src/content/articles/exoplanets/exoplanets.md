---
title: Exoplanets
slug: exoplanets
date: 2019-06-03
authors: Timothy J. Whitaker
outline: |
  <ul>
    <li>Introduction</li>
    <li>Libraries and Data Preparation</li>
    <li>Overview</li>
    <li>Planet Characteristics</li>
    <ul>
      <li>How big are the planets?</li>
    </ul>
    <li>Stellar Characteristics</li>
    <ul>
      <li>How big are the host stars?</li>
    </ul>
  </ul>
---

The NASA open catalogue of exoplanets is a dataset of almost 4000 planets, dating back to an overlooked photograph from 1917.[^1] In the last 5 years, technological advancements and data collection efforts have spurned the discovery of more planets than in the previous 100 years combined. Sky survey projects all over the world collecting terabytes of information nightly.[^2] There's a ton of astronomical data to explore and I'm excited to see what we can learn from these planets and the greater universe in general.

## Libraries and Data Preparation

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

The libraries I'm using are ColorSchemes, CSV, DataFrames, and Gadfly, a plotting library akin to ggplot2.

```julia
using ColorSchemes, CSV, DataFrames, Gadfly

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

## Overview

The first thing I do in exploratory data analysis is to look at the dataset as a whole. Calling `describe(df)` will print out general statistics of the dataframe (min, max, mean, median, etc.).

```julia
# Statistical details of the entire dataset
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

First glance shows a variety of information, split between some meta information, planet characteristics and host star characteristics. It's important to note that most of the columns show missing data, so we'll need to account for that when making comparisons between attributes.

### How were they discovered?

Exoplanet discovery has exploded in the last 10 years thanks to powerful telescopes, sensitive photometry technology and precise data analysis. The graph below shows how these methods and discoveries have evolved over time.

<object data="discoveries.svg" type="image/svg+xml">
  <param name="url" value="discoveries.svg">
</object>

```julia
# Exoplanet discoveries by years and methods
discoveries = dropmissing(exoplanets, [:pl_disc, :pl_discmethod])

plot(dicoveries, x = :pl_disc, color = :pl_discmethod, Geom.line, Stat.histogram,
     Scale.y_sqrt, Guide.xlabel("Discovery Year"), Guide.colorkey(title = "Discovery Method"))
```

The dataset shows 10 different discovery methods used to find exoplanets. Transit and radial velocity appear to be the most popular and are both techniques that involve analyzing the photometry of the host star in a system to spot characterstics consistent with an orbiting planet.

#### Radial Velocity

This method relies on the fact that a star does not remain stationary when it is orbited by a planet. It moves, ever so slightly, in a small ellipse, responding to the gravitational tug of its smaller companion. When viewed from a distance, these slight movements affect the star's color signature. If the star is moving towards the observer, then its spectrum would appear slightly shifted towards the blue; if it is moving away, it will be shifted towards the red.

#### Transit

This method detects planets by measuring a regular dimming of a star as an orbiting planet passes between it and the Earth.

### Where are they?

Most discovered exoplanets live within 500 parsecs (1630.78 light years) of Earth. With this kind of density, it's clear that the universe contains a lot of planets. As our observation and data collection improves, I expect the number of exoplanets to grow exponentially.

The closest and farthest planets we've found so far are Proxima Centauri b at 1.29 parsecs (4.21 light years) and SWEEPS-4 b/SWEEPS-11 b at 8500 parsecs (27,723.29 light years) respectively.

We map universal objects by using the galactic coordinate system. This is a polar coordinate system, that uses the Earth (or Sun) as the origin and the center of the milky way galaxy as a 0 degree bearing. [^4] By converting the polar coordinates to cartesian coordinates, we can plot the relative position of the stars. Keep in mind that these stars actually exist in a 3-dimensional space, but due to the limitations of our plotting software, we are showing a 2-dimensional representation.

<object data="star-map.svg" type="image/svg+xml">
  <param name="url" value="star-map.svg">
</object>

```julia
# Exoplanet locations
coordinates = unique(dropmissing(exoplanets, [:st_glon, :st_dist]), [:st_glon, :st_dist])

# Distance stats
sorted_distance = sort(dropmissing(exoplanets, [:st_dist]), :st_dist)
describe(sorted_distance[:st_dist])
closest = first(sorted_distance)
farthest = last(sorted_distance)

# Convert polar galactic coordinates to cartesian
x_pos = coordinates[:st_dist] .* cos.(coordinates[:st_glon])
y_pos = coordinates[:st_dist] .* sin.(coordinates[:st_glon])

plot(layer(x = [0, 8121.9961554], y = [0, -7.90263480146], label = ["Earth", "Galactic Center", Geom.point, Geom.label, style(default_color = colorant"white", point_label_color = colorant"white")),
     layer(x = x_pos, y = y_pos),
     Guide.xlabel("Distance (Parsecs)"),
     Guide.ylabel("Distance (Parsecs)"))
```

## Planet Characterstics

Our solar system has 8 planets, each with wildly varying characteristics. We have small terrestial planets, large gas giants, and cold ice giants. What do the exoplanets look like? Are there any that resemble Earth? Are terrestial planets more common than gaseous ones? What do the smallest and largest exoplanets look like?

### How big are the planets?

Here's a scatter plot of all the exoplanets, plotted by their mass and radius. Most small radius planets are in a tight band of mass, indicating that the variance is smaller than larger planets.

<object data="mass-radius-scatter.svg" type="image/svg+xml">
  <param name="url" value="mass-radius-scatter.svg">
</object>

```
# Mass radius scatter
exoplanet_sizes = dropmissing(exoplanets, [:pl_rade, :pl_bmasse])

planet_sizes = DataFrame(name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                         mass = [0.0553, 0.815, 1, 0.107, 317.8, 95.2, 14.5, 17.1],
                         radius = [0.383, 0.949, 1, 0.532, 11.21, 9.45, 4.01, 3.88])

plot(layer(planet_sizes, x = :radius, y = :mass, label = :name, Geom.point, Geom.label, style(default_color = colorant"white", point_label_color = colorant"white")),
     layer(exoplanet_sizes, x = :pl_rade, y = :pl_bmasse),
     Scale.y_sqrt, Guide.xlabel("Radius (Earth Radii)"), Guide.ylabel("Mass (Earth Mass)"))
```

By plotting the size as a 2d density contour, we can see the patterns shown in the scatter plot. It's clear in this plot, that most exoplanets cluster around sizes between Mercury/Earth/Mars and Uranus/Neptune.

<object data="mass-radius-density.svg" type="image/svg+xml">
  <param name="url" value="mass-radius-density.svg">
</object>

```julia
# Mass radius density
plot(layer(planet_sizes, x = :radius, y = :mass, label = :name, Geom.point, Geom.label, style(default_color = colorant"white", point_label_color = colorant"white")),
     layer(exoplanet_sizes, x = :pl_rade, y = :pl_bmasse, Geom.density2d),
     style(key_position = :none), Scale.color_continuous(colormap = x->colorant"#fe4365"),
     Guide.xlabel("Radius (Earth Radii)"), Guide.ylabel("Mass (Earth Mass)"))
```

The giants (Jupiter/Saturn/Uranus/Neptune) in our solar system pale in comparison to the larger exoplanets. The plot below shows the relative size of the largest and smallest exoplanets discovered along with Jupiter and Earth as references.

<object data="relative-size.svg" type="image/svg+xml">
  <param name="url" value="relative-size.svg">
</object>

```julia
# Relative Size
sorted_size = sort(dropmissing(exoplanets, :pl_rade), :pl_rade)
smallest = first(sorted_size)
largest = last(sorted_size)

plot(layer(x = [3.5], y = [0], label = ["Kepler-37 b"], Geom.point, Geom.label, style(point_size = 0.336pt, point_label_color = colorant"white")),
     layer(x = [3], y = [0], label = ["Earth"], Geom.point, Geom.label, style(point_size = 1pt, point_label_color = colorant"white")),
     layer(x = [2.5], y = [0], label = ["Jupiter"], Geom.point, Geom.label, style(point_size = 11.21pt, point_label_color = colorant"white")),
     layer(x = [1], y = [0], label = ["HD 100546 b"], Geom.point, Geom.label, style(point_size = 77.342pt, point_label_color = colorant"white")),
     Scale.y_continuous(minvalue = -200, maxvalue = 200))
```

### How hot are they?

A key characteristic for planet habitability is the surface temperature. We don't have a way to measure this on planets so far away, as surface or atmospheric properties can raise or lower temperatures at the surface. Equilibrium temperature is a measurement we use to estimate their theoretical temperature by considering the planet as if it were a black body, heated only by it's parent star. By plotting the ratio between the distance to a planets host star, by the amount of solar irradiance it receives, we see a strong relationship between these values and equilibrium temperature.

<object data="equilibrium-temperature.svg" type="image/svg+xml">
  <param name="url" value="equilibrium-temperature.svg">
</object>

```julia
# Equilibrium temperature
equilibrium_temperature = dropmissing(exoplanets, [:pl_eqt, :pl_ratdor, :pl_insol])

plot(equilibrium_temperature, x = :pl_ratdor, y = :pl_insol, color = :pl_eqt,
     Scale.y_log10, Scale.x_log10, Scale.color_continuous(colormap = (x->get(ColorSchemes.blackbody, x))),
     Guide.xlabel("Ratio of Distance to Star Size"), Guide.ylabel("Solar Irradiance (Earth Flux)"), Guide.colorkey(title = "Temp (K) "))
```

### What do their orbits look like?

<object data="orbit-grid.svg" type="image/svg+xml">
  <param name="url" value="orbit-grid.svg">
</object>

```julia
# Orbit characteristics
semi_major_axis = plot(dropmissing(exoplanets, [:pl_orbsmax]), x = :pl_orbsmax, Geom.histogram(bincount = 50),
     Scale.x_log10, Guide.xlabel("Orbital Semi Major Axis (AU)"))

period = plot(dropmissing(exoplanets, [:pl_orbper]), x = :pl_orbper, Geom.histogram(bincount = 50),
     Scale.x_log10, Guide.xlabel("Orbital Period (Days)"))

eccentricity = plot(dropmissing(exoplanets, [:pl_orbeccen]), x = :pl_orbeccen, Geom.histogram(bincount = 50),
     Guide.xlabel("Eccentricity"))

inclination = plot(dropmissing(exoplanets, [:pl_orbincl]), x = :pl_orbincl, Geom.histogram(bincount = 50),
     Guide.xlabel("Inclination (Deg)"))

orbits = gridstack([semi_major_axis period; eccentricity inclination])
```

### Do they have moons?

Nope! Not a single exoplanet in this dataset has a moon.

```julia
julia> exoplanets[exoplanets[:pl_mnum] .> 0, :pl_mnum] |> length
julia> 0
```

## Stellar Characteristics

<object data="star-mass-radius-scatter.svg" type="image/svg+xml">
  <param name="url" value="star-mass-radius-scatter.svg">
</object>

<object data="star-temperature-brightness.svg" type="image/svg+xml">
  <param name="url" value="star-temperature-brightness.svg">
</object>

<object data="star-metallicity.svg" type="image/svg+xml">
  <param name="url" value="star-metallicity.svg">
</object>

[^1]: https://www.jpl.nasa.gov/news/news.php?feature=6991
[^2]: https://www.lsst.org/
[^3]: https://juliadata.github.io/DataFrames.jl/stable/man/getting_started.html#Examining-the-Data-1
[^4]: https://en.wikipedia.org/wiki/Galactic_coordinate_system
