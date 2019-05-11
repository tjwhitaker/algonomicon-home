import React from "react"
import renderer from "react-test-renderer"

import Project from "../../src/templates/project"

describe("Project", () => {
  it("renders correctly", () => {
    const data = {
      "project": {
        "title": "Coming Soon",
        "description": "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
      }
    }

    const tree = renderer.create(<Project data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
