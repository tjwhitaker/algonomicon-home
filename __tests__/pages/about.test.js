import React from "react"
import renderer from "react-test-renderer"

import About from "../../src/pages/about"

describe("About", () => {
  it("renders correctly", () => {
    const data = {
      file: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG6AD//xAAWEAADAAAAAAAAAAAAAAAAAAAAECH/2gAIAQEAAQUCKv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABoQAAEFAQAAAAAAAAAAAAAAAAABESFBUXH/2gAIAQEAAT8hZdOiaP/aAAwDAQACAAMAAAAQA8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAACAgMBAAAAAAAAAAAAAAAAESFhATFRgf/aAAgBAQABPxBceaFuliXDQun/2Q==",
            aspectRatio: 3.438888888888889,
            src: "/static/43723a1e05560dc9fab4d600c35651c1/d47f1/inception.jpg",
            srcSet:
              "/static/43723a1e05560dc9fab4d600c35651c1/b5b92/inception.jpg 200w,\n/static/43723a1e05560dc9fab4d600c35651c1/3ff6e/inception.jpg 400w,\n/static/43723a1e05560dc9fab4d600c35651c1/d47f1/inception.jpg 800w,\n/static/43723a1e05560dc9fab4d600c35651c1/86173/inception.jpg 1200w,\n/static/43723a1e05560dc9fab4d600c35651c1/cd57b/inception.jpg 1238w",
            sizes: "(max-width: 800px) 100vw, 800px",
          },
        },
      },
    }

    const tree = renderer.create(<About data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
