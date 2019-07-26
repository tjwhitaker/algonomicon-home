---
title: Feature Engineering
slug: feature-engineering
date: 2019-07-25
---

```julia
using Statistics

function normalize(xs)
  μ = mean(xs)
  σ = std(xs)

  return map(x -> ((x - μ) / σ), xs)
end
```