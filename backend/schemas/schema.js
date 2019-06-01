import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import algorithm from "./algorithm"
import article from "./article"
import paper from "./paper"
import project from "./project"
import snippet from "./snippet"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([algorithm, article, paper, project, snippet])
})
