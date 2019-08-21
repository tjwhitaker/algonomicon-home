---
title: VGGNet
slug: vggnet
date: 2019-06-03
---

The VGGNet models are a series of convolutional neural networks developed by The Visual Geometry Group at The University of Oxford.

## Introduction

The Visual Geometry Group's paper, [Very Deep Convolutional Networks for Large-Scale Image Recognition](https://arxiv.org/abs/1409.1556), discusses the evaluation of using small convolutional filters on a variety of network depths. The 16 and 19 layer architectures performed the best and they achieved first and second place in the 2014 ImageNet Challenge for localization and classification respectively.

These models are famous because the architecture is simple, they generalize well to other non-imagenet datasets, and The Visual Geometry Group committed to open sourcing and sharing the trained model.

## Architecture

The networks consist of a series of convolutional layers seperated by max pooling layers and finishing with 2 fully connected layers into a fully connected softmax output. All the convolutional layers use only a 3x3 filter with a stride of 1 and all the max pooling layers use a 2x2 filter. The choice to keep the filters small allowed VGG to build much deeper networks than the previous state of the art models. The depth made the training much slower and the total number of parameters for the 16 layer version is around 160M.

![vgg](https://neurohive.io/wp-content/uploads/2018/11/vgg16-1-e1542731207177.png)