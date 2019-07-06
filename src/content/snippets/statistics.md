---
title: Statistics
slug: statistics
date: 2019-07-05
---

```julia
  function boxplot_stats(v)
      q1 = quantile(v, 0.25)
      q2 = quantile(v, 0.5)
      q3 = quantile(v, 0.75)

      lf = q1 - (1.5 * (q3 - q1))
      uf = q3 + (1.5 * (q3 - q1))

      return (lf, q1, q2, q3, uf)
  end
```