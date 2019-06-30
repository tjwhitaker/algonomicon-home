---
title: Gradient Descent
slug: gradient-descent
date: 2019-06-28
---

Gradient descent is an iterative approach to optimation. It works by tweaking parameters over time to minimize a cost function.

$
$

<object data="gradient-descent.svg" type="image/svg+xml">
    <param name="url" value="gradient-descent.svg">
</object>

```julia
using Gadfly

# Data fit to y = 2x + 10 +/- noise for x in 1:100
xs = 1:100 |> collect
ys = map(x->2x + 10 + ((rand() - 0.5) * 100), xs)

# Learning Rate
η = 0.0001

# Iterations
epochs = 100000

function gradient_descent(xs, ys, η, epochs)
    m = 0
    b = 0

    for i = 1:epochs
        prediction = (m * xs) .+ b

        # Partial derivatives with respect to m and b
        dm = (-2 / length(xs)) .* sum(xs .* (ys - prediction))
        db = (-2 / length(xs)) .* sum(ys - prediction)

        m = m - η * dm
        b = b - η * db
    end

    return (m, b)
end

(m, b) = gradient_descent(xs, ys, η, epochs)

plot(layer(x = xs, y = ys),
     layer(x -> m * x + b, 1, 100, Geom.line))
```