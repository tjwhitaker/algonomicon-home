---
title: Dataframes
slug: dataframes
date: June 11th, 2019
---

```julia
using CSV, Dataframes

# Read a CSV file into a dataframe
df = CSV.read("file.csv")

# Statistical description of dataframe (min, max, mean, etc.)
info = describe(df)

# Subsets
firstRow = first(df)
lastFive = last(df, 5)
subset = df[5:10, :]

# Column access (name or index)
col1 = df.name
col1 = df[:name]
col2 = df[2]

# Sizes and counts
numRows = size(df, 1)
numCols = size(df, 2)
shape = size(df)
```
