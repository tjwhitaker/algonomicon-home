---
title: Statistics
slug: statistics
date: 2019-07-05
---

```julia
using Statistics

function boxplot_stats(a::Array{Number})
    q1 = quantile(a, 0.25)
    q2 = quantile(a, 0.5)
    q3 = quantile(a, 0.75)

    lf = q1 - (1.5 * (q3 - q1))
    uf = q3 + (1.5 * (q3 - q1))

    return (lf, q1, q2, q3, uf)
end
```