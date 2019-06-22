---
title: Polynomial Regression
slug: polynomial-regression
date: 2019-06-19
---

Polynomial regression is a technique used for estimating relationships by fitting the inputs and the output to a polynomial function. Like linear regression, polynomial regression is used when the range of values is continuous, but unlike linear regression, the slope is not constant.

$
\hat{y}_i = \theta_0 + \theta_1 x_i + \theta_2 x_i^2 + ... + \theta_m x_i^m
$

<object data="polynomial-regression.svg" type="image/svg+xml">
    <param name="url" value="polynomial-regression.svg">
</object>

```julia
using Gadfly

line = layer(y = map(x->(x - 25)^2, 1:60), Geom.line)
scatter = layer(y = map(x->(x - 25)^2 + ((rand() - 0.5) * 400), 1:60), Geom.point)

plot(line, scatter)
```
