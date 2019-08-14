---
title: VGG
slug: vgg
date: 2019-06-03
---

The VGG models are a series of convolutional neural networks developed by The Visual Geometry Group at The University of Oxford.

```julia
vgg16 = Chain(
  Conv((3, 3), 64=>64),
  Conv((3, 3), 64=>64),
  MaxPool((2, 2)),
  Conv((3, 3), 128=>128),
  Conv((3, 3), 128=>128),
  MaxPool((2, 2)),
  Conv((3, 3), 256=>256),
  Conv((3, 3), 256=>256),
  Conv((3, 3), 256=>256),
  MaxPool((2, 2)),
  Conv((3, 3), 512=>512),
  Conv((3, 3), 512=>512),
  Conv((3, 3), 512=>512),
  MaxPool((2, 2)),
  Conv((3, 3), 512=>512),
  Conv((3, 3), 512=>512),
  Conv((3, 3), 512=>512),
  MaxPool((2, 2)),
  Dense(4096, 4096),
  Dense(4096, 4096),
  Dense(4096, 1000),
  softmax
)
```