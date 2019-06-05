import React from "react"
import renderer from "react-test-renderer"

import { Categories } from "../../src/components"

describe("Categories", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Categories />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
