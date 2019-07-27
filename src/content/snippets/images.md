---
title: Images
slug: images
date: 2019-06-07
---

Processing and manipulating images in code.

```julia
using Images

# Mean and standard deviation of imagenet
μ = reshape([0.485, 0.456, 0.406], 1, 1, 3)
σ = reshape([0.229, 0.224, 0.225], 1, 1, 3)

# Normalize to scale inputs to improve training and accuracy
normalize(x) = (x .- μ) ./ σ
denormalize(x) = x .* σ .+ μ

# Load an image, normalize and return a matrix (W x H x C x N)
function loadImage(path)
    x = channelview(load(path))
    x = normalize(permutedims(x, [3, 2, 1]))

    return reshape(x, size(x, 1), size(x, 2), size(x, 3), 1)
end

# Convert a matrix (W x H x C x N) to an image and save to path
function saveImage(x, path)
    x = denormalize(reshape(x, size(x)[1:3]...))
    x = clamp.(permutedims(x, [3, 2, 1]), 0, 1)
    x = colorview(RGB, x)

    save(path, x)
end
```
