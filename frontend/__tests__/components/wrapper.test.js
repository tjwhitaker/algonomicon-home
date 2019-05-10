import React from "react"
import renderer from "react-test-renderer"

import { Wrapper } from "../../src/components"

describe("Wrapper", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Wrapper />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})