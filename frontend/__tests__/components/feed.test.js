import React from "react"
import renderer from "react-test-renderer"

import { Feed } from "../../src/components"

describe("Feed", () => {
  it("renders correctly", () => {
    const data = {
      articles: {
        edges: [
          {
            node: {
              _type: "article",
              _createdAt: "2019-05-02T03:13:19Z",
              title: "Getting Flux and Cuda to Work with Julia Pro",
              description:
                "The fundamental concepts of classical physics, space, time, mass, and derived concepts, velocity, momentum, force, angular momentum, energy ... all rest on the principle that material points have trajectories. They are defined as lines in space-time. Even the dynamics of continuous, solid or fluid media describes the trajectories of the material points which constitute the bodies in motion. But the indeterminacy relation of Heisenberg prevents quantum particles from having such classical trajectories, since their position and velocity can not be exactly defined at the same time. How then can it explain all the appearances which legitimize the fundamental concepts of classical physics?",
              slug: {
                current: "getting-flux-and-cuda-to-work-with-julia-pro",
              },
            },
          },
        ],
      },
      datasets: {
        edges: [
          {
            node: {
              _type: "dataset",
              _createdAt: "2019-04-17T17:03:27Z",
              title: "MNIST",
              description: "Handwritten digits",
              slug: {
                current: "mnist",
              },
            },
          },
        ],
      },
      papers: {
        edges: [
          {
            node: {
              _type: "paper",
              _createdAt: "2019-04-18T15:33:31Z",
              title: "A Neural Algorithm of Artistic Style",
              abstract:
                "In fine art, especially painting, humans have mastered the skill to create unique visual experiences through composing a complex interplay between the content and style of an image. Thus far the algorithmic basis of this process is unknown and there exists no artificial system with similar capabilities. However, in other key areas of visual perception such as object and face recognition near-human performance was recently demonstrated by a class of biologically inspired vision models called Deep Neural Networks. Here we introduce an artificial system based on a Deep Neural Network that creates artistic images of high perceptual quality. The system uses neural representations to separate and recombine content and style of arbitrary images, providing a neural algorithm for the creation of artistic images. Moreover, in light of the striking similarities between performance-optimised artificial neural networks and biological vision, our work offers a path forward to an algorithmic understanding of how humans create and perceive artistic imagery.",
              slug: {
                current: "a-neural-algorithm-of-artistic-style",
              },
            },
          },
        ],
      },
      projects: {
        edges: [
          {
            node: {
              _type: "project",
              _createdAt: "2019-04-18T16:24:58Z",
              title: "Coming Soon",
              description:
                "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
              slug: {
                current: "coming-soon",
              },
            },
          },
        ],
      },
      snippets: {
        edges: [
          {
            node: {
              _type: "snippet",
              _createdAt: "2019-05-04T23:31:11Z",
              title: "Hello World",
              description: "Lorem ipsum dolor sit amet.",
              slug: {
                current: "hello-world",
              },
            },
          },
        ],
      },
    }

    const tree = renderer.create(<Feed data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
