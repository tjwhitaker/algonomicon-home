---
title: Linear Regression
slug: linear-regression
date: 2019-06-03
---

Linear regression is a technique used for predicting outputs from a set of inputs by approximating a linear relationship.

$
\hat{y}_i = {\theta^T} \cdot x_i
$

<object data="linear-regression.svg" type="image/svg+xml">
    <param name="url" value="linear-regression.svg">
</object>

```julia
using Gadfly

line = layer(y = map(x -> 2x, 1:100), Geom.line)
scatter = layer(y = map(x -> 2x + ((rand() - 0.5) * 100), 1:100), Geom.point)

plot(line, scatter)
```
