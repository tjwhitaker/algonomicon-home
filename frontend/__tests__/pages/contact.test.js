import React from "react"
import renderer from "react-test-renderer"

import Contact from "../../src/pages/contact"

describe("Contact", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Contact />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
