import React from "react"
import renderer from "react-test-renderer"

import NotFound from "../../src/pages/404"

describe("404", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NotFound />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
