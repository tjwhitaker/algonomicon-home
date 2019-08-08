---
title: Matrices and Vectors
slug: matrices-and-vectors
date: 2019-08-08
---

```julia
# Return an array of the rank of each item in an array
function rank(xs)
  ranks = Array{Int64}(undef, length(xs))
  order = sortperm(xs)

  for i = 1:length(xs)
    ranks[order[i]] = i
  end

  return ranks
end
```