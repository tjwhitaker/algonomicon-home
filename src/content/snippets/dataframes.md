---
title: Dataframes
slug: dataframes
date: 2019-06-11
---

Manipulating tabular datasets

```julia
using CSV, Dataframes

# Read a CSV file into a dataframe
df = CSV.read("file.csv")

# Statistical description of dataframe (min, max, mean, etc.)
info = describe(df)

# Subsets
first_row = first(df)
last_five = last(df, 5)
subset = df[5:10, :]

# Column access (name or index)
name = df[:name]
age = df[2]

# Sizes and counts
num_rows = size(df, 1)
num_cols = size(df, 2)
shape = size(df)

# Replace missing values with NaN (needed for some plotting libraries)
nan_df = mapcols(col -> coalesce.(col, NaN), df)
```
