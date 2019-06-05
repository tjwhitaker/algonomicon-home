import React from "react"
import renderer from "react-test-renderer"

import Snippet from "../../src/templates/snippet"

describe("Snippets", () => {
  it("renders correctly", () => {
    const data = {
      snippet: {
        title: "Hello World",
        _rawContent: [
          {
            _key: "fcebdbce3745",
            _type: "code",
            code: 'print("Hello world")',
          },
        ],
        _createdAt: "2019-05-04T23:31:11Z",
        _updatedAt: "2019-05-06T20:25:28Z",
      },
    }

    const tree = renderer.create(<Snippet data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
