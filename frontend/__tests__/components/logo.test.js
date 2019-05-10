import React from "react"
import renderer from "react-test-renderer"

import { Logo } from "../../src/components"

describe("Logo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})