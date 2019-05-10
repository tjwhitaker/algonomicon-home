import React from "react"
import renderer from "react-test-renderer"

import Datasets from "../../src/pages/datasets"

describe("Datasets", () => {
  it("renders correctly", () => {
    const data = {
      "datasets": {
        "edges": [
          {
            "node": {
              "title": "MNIST",
              "slug": {
                "current": "mnist"
              },
              "description": "Handwritten digits",
              "format": "CSV",
              "instances": 70000
            }
          }
        ]
      }
    }

    const tree = renderer.create(<Datasets data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
