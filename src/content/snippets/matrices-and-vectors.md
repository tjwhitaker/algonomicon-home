---
title: Matrices and Vectors
slug: matrices-and-vectors
date: 2019-08-08
---

Code that operates on n-dimensional arrays.

```julia
using Statistics

# Return an array of the rank of each item in an array
function rank(xs)
  ranks = Array{Int64}(undef, length(xs))
  order = sortperm(xs)

  for i = 1:length(xs)
    ranks[order[i]] = i
  end

  return ranks
end

# Mean center values in an array at 0 with standard deviation of 1 
function normalize(xs)
  μ = mean(xs)
  σ = std(xs)

  return map(x -> ((x - μ) / σ), xs)
end
```