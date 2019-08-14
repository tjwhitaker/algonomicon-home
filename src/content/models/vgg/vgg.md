---
title: VGG
slug: vgg
date: 2019-06-03
---

The VGG models are a series of convolutional neural networks developed by The Visual Geometry Group at The University of Oxford.

```julia
# Layer (filter size) (WxHxC)
Input (224x224x3)
Convolution (3x3) (224x224x64)
Convolution (3x3) (224x224x64)
Max Pool (2x2) (112x112x64)
Convolution (3x3) (112x112x128)
Convolution (3x3) (112x112x128)
Max Pool (2x2) (56x56x128)
Convolution (3x3) (56x56x256)
Convolution (3x3) (56x56x256)
Convolution (3x3) (56x56x256)
Max Pool (2x2) (28x28x256)
Convolution (3x3) (28x28x512)
Convolution (3x3) (28x28x512)
Convolution (3x3) (28x28x512)
Max Pool (2x2) (14x14x512)
Convolution (3x3) (14x14x512)
Convolution (3x3) (14x14x512)
Convolution (3x3) (14x14x512)
Max Pool (2x2) (7x7x512)
Dense (1x1x4096)
Dense (1x1x4096)
Dense (1x1x1000)
Softmax
```