import React from "react"
import renderer from "react-test-renderer"

import Articles from "../../src/pages/articles"

describe("Articles", () => {
  it("renders correctly", () => {
    const data = {
      "articles": {
        "edges": [
          {
            "node": {
              "title": "Getting Flux and Cuda to Work with Julia Pro",
              "slug": {
                "current": "getting-flux-and-cuda-to-work-with-julia-pro"
              },
              "description": "The fundamental concepts of classical physics, space, time, mass, and derived concepts, velocity, momentum, force, angular momentum, energy ... all rest on the principle that material points have trajectories. They are defined as lines in space-time. Even the dynamics of continuous, solid or fluid media describes the trajectories of the material points which constitute the bodies in motion. But the indeterminacy relation of Heisenberg prevents quantum particles from having such classical trajectories, since their position and velocity can not be exactly defined at the same time. How then can it explain all the appearances which legitimize the fundamental concepts of classical physics?"
            }
          }
        ]
      }
    }

    const tree = renderer.create(<Articles data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
