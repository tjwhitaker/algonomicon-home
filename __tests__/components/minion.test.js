import React from "react"
import renderer from "react-test-renderer"

import { Minion } from "../../src/components"

describe("Minion", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Minion />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
