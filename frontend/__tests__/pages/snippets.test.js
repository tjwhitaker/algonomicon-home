import React from "react"
import renderer from "react-test-renderer"

import Snippets from "../../src/pages/snippets"

describe("Snippets", () => {
  it("renders correctly", () => {
    const data = {
      snippets: {
        edges: [
          {
            node: {
              title: "Hello World",
              slug: {
                current: "hello-world",
              },
            },
          },
        ],
      },
    }

    const tree = renderer.create(<Snippets data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
