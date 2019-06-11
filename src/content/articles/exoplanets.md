---
title: Exoplanets
slug: exoplanets
date: June 3rd, 2019
authors: Timothy J. Whitaker
---

I came across a fun dataset of almost 4000 confirmed planets that exist outside of our solar system.[^1] The NASA open catalogue of exoplanets dates back to an overlooked photograph taken in 1917. Almost 100 years later, an astronomy professor and his grad student were preparing research for a talk on white dwarfs and came across a slide which was soon then confirmed to be the first evidence of an exoplanet discovery.[^2] In recent years, technological advances have spurned a lot more discoveries due to a mountain of astronomical data that is being collecting. Sky survey projects all over the world collecting terabytes of information nightly.[^3] These projects are going to grow larger and collect more information as time goes on, so it's a great time to be a data scientist if you're interested in exploring the universe!

## Libraries and Data

I downloaded the CSV from <https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets>, which contains 3972 confirmed exoplanets and 144 attributes for each.

Included in the file is a header detailing the column definitions.

```julia
# COLUMN pl_hostname:    Host Name
# COLUMN pl_letter:      Planet Letter
# COLUMN pl_name:        Planet Name
# COLUMN pl_discmethod:  Discovery Method
# COLUMN pl_controvflag: Controversial Flag
# COLUMN pl_pnum:        Number of Planets in System
# COLUMN pl_orbper:      Orbital Period [days]
# COLUMN pl_orbsmax:     Orbit Semi-Major Axis [AU])
# COLUMN pl_orbeccen:    Eccentricity
# COLUMN pl_orbincl:     Inclination [deg]
# COLUMN pl_bmassj:      Planet Mass or M*sin(i) [Jupiter mass]
# COLUMN pl_bmassprov:   Planet Mass or M*sin(i) Provenance
# COLUMN pl_radj:        Planet Radius [Jupiter radii]
# COLUMN pl_dens:        Planet Density [g/cm**3]
# COLUMN pl_ttvflag:     TTV Flag
# COLUMN pl_kepflag:     Kepler Field Flag
# COLUMN pl_k2flag:      K2 Mission Flag
# COLUMN pl_nnotes:      Number of Notes
# COLUMN ra_str:         RA [sexagesimal]
# COLUMN ra:             RA [decimal degrees]
# COLUMN dec_str:        Dec [sexagesimal]
# COLUMN dec:            Dec [decimal degrees]
# COLUMN st_dist:        Distance [pc]
# COLUMN st_optmag:      Optical Magnitude [mag]
# COLUMN st_optband:     Optical Magnitude Band
# COLUMN gaia_gmag:      G-band (Gaia) [mag]
# COLUMN st_teff:        Effective Temperature [K]
# COLUMN st_mass:        Stellar Mass [Solar mass]
# COLUMN st_rad:         Stellar Radius [Solar radii]
# COLUMN rowupdate:      Date of Last Update
# COLUMN pl_tranflag:    Planet Transit Flag
# COLUMN pl_rvflag:      Planet RV Flag
# COLUMN pl_imgflag:     Planet Imaging Flag
# COLUMN pl_astflag:     Planet Astrometry Flag
# COLUMN pl_omflag:      Planet Orbital Modulation Flag
# COLUMN pl_cbflag:      Planet Circumbinary Flag
# COLUMN pl_angsep:      Calculated Angular Separation [mas]
# COLUMN pl_orbtper:     Time of Periastron [days]
# COLUMN pl_orblper:     Long. of Periastron [deg]
# COLUMN pl_rvamp:       Radial Velocity Amplitude [m/s]
# COLUMN pl_eqt:         Equilibrium Temperature [K]
# COLUMN pl_insol:       Insolation Flux [Earth flux]
# COLUMN pl_massj:       Planet Mass [Jupiter mass]
# COLUMN pl_msinij:      Planet M*sin(i) [Jupiter mass]
# COLUMN pl_masse:       Planet Mass [Earth mass]
# COLUMN pl_msinie:      Planet M*sin(i) [Earth mass]
# COLUMN pl_bmasse:      Planet Mass or M*sin(i) [Earth mass]
# COLUMN pl_rade:        Planet Radius [Earth radii]
# COLUMN pl_rads:        Planet Radius [Solar radii]
# COLUMN pl_trandep:     Transit Depth [percent]
# COLUMN pl_trandur:     Transit Duration [days]
# COLUMN pl_tranmid:     Transit Midpoint [days]
# COLUMN pl_tsystemref:  Time System Reference
# COLUMN pl_imppar:      Impact Parameter
# COLUMN pl_occdep:      Occultation Depth [percentage]
# COLUMN pl_ratdor:      Ratio of Distance to Stellar Radius
# COLUMN pl_ratror:      Ratio of Planet to Stellar Radius
# COLUMN pl_def_reflink: Default Reference
# COLUMN pl_disc:        Year of Discovery
# COLUMN pl_disc_reflink: Discovery Reference
# COLUMN pl_locale:      Discovery Locale
# COLUMN pl_facility:    Discovery Facility
# COLUMN pl_telescope:   Discovery Telescope
# COLUMN pl_instrument:  Discovery Instrument
# COLUMN pl_status:      Status
# COLUMN pl_mnum:        Number of Moons in System
# COLUMN pl_st_npar:     Number of Stellar and Planet Parameters
# COLUMN pl_st_nref:     Number of Stellar and Planet References
# COLUMN pl_pelink:      Link to Exoplanet Encyclopaedia
# COLUMN pl_edelink:     Link to Exoplanet Data Explorer
# COLUMN pl_publ_date:   Publication Date
# COLUMN hd_name:        HD Name
# COLUMN hip_name:       HIP Name
# COLUMN st_rah:         RA [hrs]
# COLUMN st_glon:        Galactic Longitude [deg]
# COLUMN st_glat:        Galactic Latitude [deg]
# COLUMN st_elon:        Ecliptic Longitude [deg]
# COLUMN st_elat:        Ecliptic Latitude [deg]
# COLUMN st_plx:         Parallax [mas]
# COLUMN gaia_plx:       Gaia Parallax [mas]
# COLUMN gaia_dist:      Gaia Distance [pc]
# COLUMN st_pmra:        Proper Motion (RA) [mas/yr]
# COLUMN st_pmdec:       Proper Motion (Dec) [mas/yr]
# COLUMN st_pm:          Total Proper Motion [mas/yr]
# COLUMN gaia_pmra:      Gaia Proper Motion (RA) [mas/yr]
# COLUMN gaia_pmdec:     Gaia Proper Motion (Dec) [mas/yr]
# COLUMN gaia_pm:        Gaia Total Proper Motion [mas/yr]
# COLUMN st_radv:        Radial Velocity [km/s]
# COLUMN st_sp:          Spectral Type
# COLUMN st_spstr:       Spectral Type
# COLUMN st_logg:        Stellar Surface Gravity [log10(cm/s**2)]
# COLUMN st_lum:         Stellar Luminosity [log(Solar)]
# COLUMN st_dens:        Stellar Density [g/cm**3]
# COLUMN st_metfe:       Stellar Metallicity [dex]
# COLUMN st_metratio:    Metallicity Ratio
# COLUMN st_age:         Stellar Age [Gyr]
# COLUMN st_vsini:       Rot. Velocity V*sin(i) [km/s]
# COLUMN st_acts:        Stellar Activity S-index
# COLUMN st_actr:        Stellar Activity log(R'HK)
# COLUMN st_actlx:       X-ray Activity log(L<sub>x</sub>)
# COLUMN swasp_id:       SWASP Identifier
# COLUMN st_nts:         Number of Time Series
# COLUMN st_nplc:        Number of Planet Transit Light Curves
# COLUMN st_nglc:        Number of General Light Curves
# COLUMN st_nrvc:        Number of Radial Velocity Time Series
# COLUMN st_naxa:        Number of Amateur Light Curves
# COLUMN st_nimg:        Number of Images
# COLUMN st_nspec:       Number of Spectra
# COLUMN st_uj:          U-band (Johnson) [mag]
# COLUMN st_vj:          V-band (Johnson) [mag]
# COLUMN st_bj:          B-band (Johnson) [mag]
# COLUMN st_rc:          R-band (Cousins) [mag]
# COLUMN st_ic:          I-band (Cousins) [mag]
# COLUMN st_j:           J-band (2MASS) [mag]
# COLUMN st_h:           H-band (2MASS) [mag]
# COLUMN st_k:           Ks-band (2MASS) [mag]
# COLUMN st_wise1:       WISE 3.4um [mag]
# COLUMN st_wise2:       WISE 4.6um [mag]
# COLUMN st_wise3:       WISE 12.um [mag]
# COLUMN st_wise4:       WISE 22.um [mag]
# COLUMN st_irac1:       IRAC 3.6um [mag]
# COLUMN st_irac2:       IRAC 4.5um [mag]
# COLUMN st_irac3:       IRAC 5.8um [mag]
# COLUMN st_irac4:       IRAC 8.0um [mag]
# COLUMN st_mips1:       MIPS 24um [mag]
# COLUMN st_mips2:       MIPS 70um [mag]
# COLUMN st_mips3:       MIPS 160um [mag]
# COLUMN st_iras1:       IRAS 12um Flux [Jy]
# COLUMN st_iras2:       IRAS 25um Flux [Jy]
# COLUMN st_iras3:       IRAS 60um Flux [Jy]
# COLUMN st_iras4:       IRAS 100um Flux [Jy]
# COLUMN st_photn:       Number of Photometry Measurements
# COLUMN st_umbj:        U-B (Johnson) [mag]
# COLUMN st_bmvj:        B-V (Johnson) [mag]
# COLUMN st_vjmic:       V-I (Johnson-Cousins) [mag]
# COLUMN st_vjmrc:       V-R (Johnson-Cousins) [mag]
# COLUMN st_jmh2:        J-H (2MASS) [mag]
# COLUMN st_hmk2:        H-Ks (2MASS) [mag]
# COLUMN st_jmk2:        J-Ks (2MASS) [mag]
# COLUMN st_bmy:         b-y (Stromgren) [mag]
# COLUMN st_m1:          m1 (Stromgren) [mag]
# COLUMN st_c1:          c1 (Stromgren) [mag]
# COLUMN st_colorn:      Number of Color Measurements
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

Now that we have the exoplanets loaded, I'm going to start looking at pieces that might be interesting to visualize. A good first step is to look at a single row in its entirety and to describe our whole dataframe with general statistical functions (min, max, mean, median, etc.). In the interest of brevity, I'm going to be posting outputs using the omitted versions of dataframes, but I'll add commented functions to show how to print all the data points as well.

```julia
# showall(first(planets))
first(planets)
```

```text
DataFrameRow. Omitted printing of 132 columns
│ Row │ rowid │ pl_hostname │ pl_letter │ pl_name  │ pl_discmethod   │ pl_controvflag │ pl_pnum │ pl_orbper │ pl_orbsmax │ pl_orbeccen │ pl_orbincl │ pl_bmassj │
│     │ Int64 │ String      │ String    │ String   │ String          │ Int64          │ Int64   │ Float64⍰  │ Float64⍰   │ Float64⍰    │ Float64⍰   │ Float64⍰  │
├─────┼───────┼─────────────┼───────────┼──────────┼─────────────────┼────────────────┼─────────┼───────────┼────────────┼─────────────┼────────────┼───────────┤
│ 1   │ 1     │ 11 Com      │ b         │ 11 Com b │ Radial Velocity │ 0              │ 1       │ 326.03    │ 1.29       │ 0.231       │ missing    │ 19.4      │
```

```julia
# showall(describe(planets))
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

[^1]: https://github.com/OpenExoplanetCatalogue/open_exoplanet_catalogue
[^2]: https://www.jpl.nasa.gov/news/news.php?feature=6991
[^3]: https://www.lsst.org/
