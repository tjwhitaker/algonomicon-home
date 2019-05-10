import React from "react"
import renderer from "react-test-renderer"

import Index from "../../src/pages/index"

describe("Index", () => {
  it("renders correctly", () => {
    const data = {
      "file": {
        "childImageSharp": {
          "fluid": {
            "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAVtgC6pyyqMUKNYGif/EAB4QAAIBBAMBAAAAAAAAAAAAAAABAgQRITEDEhNC/9oACAEBAAEFAvfkIVLUpVWT52XkRiZQ11T1c//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/ASP/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQIBAT8BZwv/xAAcEAABBAMBAAAAAAAAAAAAAAAAEBEiMQEhMpH/2gAIAQEABj8C6ySoi/i0jnJpf//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQVFhgf/aAAgBAQABPyHlWEAKvyh+AfY41s2z6hYst+S66BrYwpNe3HiJPdwLcxIk7Bbs/9oADAMBAAIAAwAAABDE5b3/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8QykRX/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAgEBPxAV1GP/xAAfEAEAAgIDAAMBAAAAAAAAAAABESEAQTFRcWGBkaH/2gAIAQEAAT8QqUIBFf1i8Xg/BLPIxWtlEs/uEpR7vC1JXb1gMkcSSxnhrDYd3gONKwfXeJ99GzDgTZKfmMZKJN+cYdIgHXhn/9k=",
            "aspectRatio": 0.75,
            "src": "/static/5b11aa8932c0f2a7d09fdf4f745e4f90/d47f1/tim.jpg",
            "srcSet": "/static/5b11aa8932c0f2a7d09fdf4f745e4f90/b5b92/tim.jpg 200w,\n/static/5b11aa8932c0f2a7d09fdf4f745e4f90/3ff6e/tim.jpg 400w,\n/static/5b11aa8932c0f2a7d09fdf4f745e4f90/d47f1/tim.jpg 800w,\n/static/5b11aa8932c0f2a7d09fdf4f745e4f90/86173/tim.jpg 1200w,\n/static/5b11aa8932c0f2a7d09fdf4f745e4f90/a5547/tim.jpg 1600w,\n/static/5b11aa8932c0f2a7d09fdf4f745e4f90/40ffe/tim.jpg 2400w,\n/static/5b11aa8932c0f2a7d09fdf4f745e4f90/8a8e6/tim.jpg 3024w",
            "sizes": "(max-width: 800px) 100vw, 800px"
          }
        }
      }
    }
    
    const tree = renderer.create(<Index data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
