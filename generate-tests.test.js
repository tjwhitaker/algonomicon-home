// Go through src directory

// For each file, if a test function is exported:

// import { test as fileTest } from file
// fileTest()

import { test } from "./src/pages/articles"

describe("Articles", () => {
  test()
})
