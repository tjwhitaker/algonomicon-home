---
title: Open Exoplanet Catalogue
slug: open-exoplanet-catalogue
date: 2019-06-28
authors: Tim Whitaker
outline: |
  <ul>
    <li>Introduction</li>
    <li>Overview</li>
    <ul>
      <li>How were they discovered?</li>
      <li>Where are they?</li>
    </ul>
    <li>Planet Characteristics</li>
    <ul>
      <li>How big are the planets?</li>
      <li>How hot are they?</li>
      <li>What do their orbits look like?</li>
      <li>Do they have moons?</li>
    </ul>
    <li>Stellar Characteristics</li>
    <ul>
      <li>How big are the stars?</li>
      <li>How hot and bright are they></li>
      <li>What are they composed of?</li>
    </ul>
    <li>Conclusion</li>
    <li>References</li>
  </ul>
---

The NASA open catalogue of exoplanets is a dataset of almost 4000 planets, created in 2012 and maintained as a free and decentralized database by a community of volunteers. Over the last 5 years, technological advancements and data collection efforts have spurned the discovery of more planets than in the previous 100 years combined. Sky survey projects all over the world are collecting terabytes of information every night, leaving data scientists with ample opportunity to explore the universe.[^2]

## Introduction

The exoplanet dataset can be downloaded from <https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets>. At the time of this article, the dataset contains 3972 confirmed exoplanets with 144 attributes relating to each. Because of the large number of attributes, I'm going to post omitted/shortened outputs of the dataframes and descriptions. If you want to print out all the information for a particular dataframe, wrap it in the function `showall(df)` or `show(df, allcols=true, allrows=true)`.[^3]

Included in the downloaded dataset is a header detailing the column definitions.

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

Now that we've loaded the dataset into a dataframe, we can start to dig in to the exoplanets and their attributes. By calling `describe(df)` we can calculate basic statistics about every attribute for every exoplanet.

```julia
# Statistical details of the entire dataset
@show describe(exoplanets)
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

Here we can see that each of the columns belong to one of three categories, meta information about the discoveries, planet characteristics and measurements, or host star characteristics and measurements. Most of the columns show missing data, so we'll need to account for that when making comparisons between exoplanets or attributes.

### How were they discovered?

Exoplanet discovery has exploded in the last 10 years thanks to powerful telescopes, sensitive photometry technology and precise data analysis. The dataset shows 10 different discovery methods used to find exoplanets. Transit and radial velocity appear to be the most popular and are both techniques that involve analyzing the photometry of the host star in a system to spot characterstics consistent with an orbiting planet.

The radial velocity method relies on the fact that a star moves in a small ellipse when a planet orbits it. This gravitational pull causes a slight shift in color signature when viewed from a distance. We can measure this shift over time, and if these movements happen at a regular interval for a fixed length of time, we can assume that a planet is probably orbiting the star.[^4]

The transit method works by measuring the brightness of a star. When an orbiting planet pass between Earth and the star, the brightness of that star slightly dims. When this dimming happens at regular intervals, and for a fixed length of time, then it's probable that a planet is orbiting it.[^5]

<object data="discoveries.svg" type="image/svg+xml">
  <param name="url" value="discoveries.svg">
</object>

```julia
plot(dropmissing(exoplanets, [:pl_disc, :pl_discmethod]), x = :pl_disc, color = :pl_discmethod, Geom.line, Stat.histogram,
     Scale.y_sqrt, Guide.xlabel("Discovery Year"), Guide.colorkey(title = "Discovery Method"))
```

### Where are they?

Most discovered exoplanets live within 500 parsecs (1630.78 light years) of Earth. This is a limitation of our current technology more than anything. As our observation and data collection capabilities improve, I expect the number of discovered exoplanets to grow exponentially.

The closest and farthest planets we've found so far are Proxima Centauri b at 1.29 parsecs (4.21 light years) and SWEEPS-4 b/SWEEPS-11 b at 8500 parsecs (27,723.29 light years) respectively.

We're mapping the exoplanet locations using the galactic coordinate system. This is a polar coordinate system that uses the Earth as the origin and the center of the milky way galaxy as a 0 degree bearing.[^6] By converting the polar coordinates to cartesian coordinates, we can plot the relative position of the stars.

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

Our solar system has 8 planets, each with varying characteristics. We have small terrestial planets, large gas giants, and cold ice giants. Do the exoplanets show as much variety? Do our discovery methods predispose us to finding certain types of planets?

### How big are the planets?

When plotting the exoplanets by their mass and radius, we see a host of different sizes. The majority appear to be terrestrial around Earth's size, but we also have a smattering of gas giants bigger than Jupiter, the largest planet in our solar system.

<object data="mass-radius-scatter.svg" type="image/svg+xml">
  <param name="url" value="mass-radius-scatter.svg">
</object>

```julia
planet_sizes = DataFrame(name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                         mass = [0.0553, 0.815, 1, 0.107, 317.8, 95.2, 14.5, 17.1],
                         radius = [0.383, 0.949, 1, 0.532, 11.21, 9.45, 4.01, 3.88])

plot(layer(planet_sizes, x = :radius, y = :mass, label = :name, Geom.point, Geom.label, style(default_color = colorant"white", point_label_color = colorant"white")),
     layer(dropmissing(exoplanets, [:pl_rade, :pl_bmasse]), x = :pl_rade, y = :pl_bmasse),
     Scale.y_sqrt, Guide.xlabel("Radius (Earth Radii)"), Guide.ylabel("Mass (Earth Mass)"))
```

By plotting the size as a 2d density contour, we can see the patterns shown in the scatter plot above. It's clear in this plot, that most exoplanets cluster around sizes between Mercury/Earth/Mars and Uranus/Neptune.

<object data="mass-radius-density.svg" type="image/svg+xml">
  <param name="url" value="mass-radius-density.svg">
</object>

```julia
plot(layer(planet_sizes, x = :radius, y = :mass, label = :name, Geom.point, Geom.label, style(default_color = colorant"white", point_label_color = colorant"white")),
     layer(dropmissing(exoplanets, [:pl_rade, :pl_bmasse]), x = :pl_rade, y = :pl_bmasse, Geom.density2d),
     style(key_position = :none), Scale.color_continuous(colormap = x->colorant"#fe4365"),
     Guide.xlabel("Radius (Earth Radii)"), Guide.ylabel("Mass (Earth Mass)"))
```

The giants in our solar system (Jupiter/Saturn/Uranus/Neptune) pale in comparison to the larger exoplanets. The plot below shows the relative size of the largest and smallest exoplanets discovered along with Jupiter and Earth as references.

<object data="relative-size.svg" type="image/svg+xml">
  <param name="url" value="relative-size.svg">
</object>

```julia
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

A key characteristic for planet habitability is the surface temperature. We don't have a way to measure this on planets so far away, as atmospheric properties can raise or lower temperatures at the surface. Equilibrium temperature is a measurement we use to estimate their theoretical temperature by considering the planet as if it were a black body, heated only by it's parent star.[^7]

<object data="equilibrium-temperature.svg" type="image/svg+xml">
  <param name="url" value="equilibrium-temperature.svg">
</object>

```julia
plot(layer(x = [1], y = [5778], color = [255], shape = [Shape.xcross], size = [3pt], label = ["Earth"], Geom.point, Geom.label, style(point_label_color = colorant"white")),
     layer(dropmissing(exoplanets, [:pl_eqt, :st_teff, :pl_orbsmax]), x = :pl_orbsmax, y = :st_teff, color = :pl_eqt),
     Scale.x_log10, Scale.color_continuous(colormap = (x->get(ColorSchemes.blackbody, x))),
     Guide.xlabel("Orbital Semi Major Axis (AU)"), Guide.ylabel("Star Effective Temperature (K)"),
     Guide.colorkey(title = "Planet Equilibrium   \nTemperature (K)  "), Guide.shapekey(pos = [10000,10000]))
```

### What do their orbits look like?

The orbits of the discovered exoplanets dpm't actually vary that much. Most orbits are small, circular and close to their host star.

I think the reason for these small, regular orbits has to do with our discovery methods. Since planets don't emit light, we can't measure them directly. We find them by measuring perturbations in movement or luminosity of their host star. Since a planets effect on a star (both occlusion and gravity) grows weaker with distance, it's natural that we find exoplanets that are close to their star.

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

Not a single exoplanet in this dataset has a moon! This goes hand in hand with the discovery method problems I mentioned in the orbits section. Current techniques can't pick up objects so small, dark, and far away. The exoplanets we find are close to their host star where it's unlikely for a moon to develop a stable orbit. It's probable that we'll find a lot of exomoons in the future. Our solar system suggests that they are common around larger planets, with Jupiter and Saturn hosting 67 and 62 moons respectively.

```julia
julia> exoplanets[exoplanets[:pl_mnum] .> 0, :pl_mnum] |> length
julia> 0
```

## Stellar Characteristics

Stars are a key factor in the life and discovery of exoplanets. Below we'll go through some of the characteristics of the stars that are hosting exoplanets and we'll see how they compare to our star, the sun.

### How big are the stars?

Our sun is pretty close to the perfect average of star sizes. Of the discovered stars with exoplanets, the median mass and radius are 0.975 and 0.970 times the mass and radius of our sun. The mean mass and radius are 1.551 and 1.009 times the values of our sun.

<object data="star-mass-radius-scatter.svg" type="image/svg+xml">
  <param name="url" value="star-mass-radius-scatter.svg">
</object>

```julia
plot(layer(x = [1], y = [1], label = ["Sun"], Geom.point, Geom.label, style(default_color = colorant"white", point_label_color = colorant"white")),
     layer(dropmissing(exoplanets, [:st_rad, :st_mass]), x = :st_rad, y = :st_mass),
     Guide.xlabel("Radius (Solar Radii)"), Guide.ylabel("Mass (Solar Radii)"),
     Scale.y_log10, Scale.x_log10)
```

### How hot and bright are they?

Most stars are actually less bright and hot than our own sun. The majority we've found are within the main sequence star classification.[^7]

<object data="star-temperature-brightness.svg" type="image/svg+xml">
  <param name="url" value="star-temperature-brightness.svg">
</object>

```julia
plot(layer(x = [5777], y = [1], label = ["Sun"], color = [5777], size = [3pt], shape = [Shape.xcross], Geom.point, Geom.label(position = :above), style(point_label_color = colorant"white")),
     layer(dropmissing(exoplanets, [:st_lum, :st_teff]), y = :st_lum, x = :st_teff, color = :st_teff),
     Scale.x_log10, Scale.color_continuous(colormap = (x->get(ColorSchemes.blackbody, x))),
     Guide.xlabel("Effective Temperature (K)"), Guide.ylabel("Luminosity (log(Solar))"),
     style(key_position = :none), Coord.cartesian(xflip = true))
```

### What are they composed of?

All active stars give off energy through nuclear fusion reactions in their cores. Extreme pressure and temperature convert hydrogen into helium and sometimes heavier elements called metals.[^8] This composition is a measurement called metallicity and is a ratio of elements in comparison to the ratio of our sun. Metal rich stars tend to be older and have a higher chance of hosting terrestrial planets in its orbits.

The plot below shows the composition ratios of exoplanets we've measured. Iron is the most dominant by far, and we can see that the ratio around 0 (or our suns composition) is the most common.

<object data="star-metallicity.svg" type="image/svg+xml">
  <param name="url" value="star-metallicity.svg">
</object>

```julia
met_fe = plot(dropmissing(exoplanets, [:st_metfe]), x = :st_metfe, Geom.histogram(bincount = 50), Guide.xlabel("Metallicity (Dex)"))
met_ratio = plot(dropmissing(exoplanets, [:st_metratio]), x = :st_metratio, Geom.histogram, Guide.xlabel("Metallicity Ratio"))

metallicity = hstack([met_fe, met_ratio])
```

## Conclusion

Thanks for reading and exploring the exoplanets with me! We looked at how we discover exoplanets, what the exoplanets are like, and how their host stars compare to our own.

I think the future of astronomy is so exciting! It seems like every year NASA releases a cool breakthrough, from the evidence of prehistoric water on mars to the first real photograph of a black hole. Astronomy is so open and friendly and I can't wait to dig in to more universal datasets going forward.

[^1]: https://www.jpl.nasa.gov/news/news.php?feature=6991
[^2]: https://www.lsst.org/
[^3]: https://juliadata.github.io/DataFrames.jl/stable/man/getting_started.html#Examining-the-Data-1
[^4]: http://www.planetary.org/explore/space-topics/exoplanets/radial-velocity.html
[^5]: http://www.planetary.org/explore/space-topics/exoplanets/transit-photometry.html
[^6]: https://en.wikipedia.org/wiki/Galactic_coordinate_system
[^7]: https://en.wikipedia.org/wiki/Planetary_equilibrium_temperature
[^7]: https://en.wikipedia.org/wiki/Main_sequence
[^8]: https://en.wikipedia.org/wiki/Nuclear_fusion#Nuclear_fusion_in_stars
