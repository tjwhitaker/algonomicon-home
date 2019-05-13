import React from "react"
import renderer from "react-test-renderer"

import Projects from "../../src/pages/projects"

describe("Projects", () => {
  it("renders correctly", () => {
    const data = {
      projects: {
        edges: [
          {
            node: {
              title: "Coming Soon",
              slug: {
                current: "coming-soon",
              },
              heroImage: {
                asset: {
                  fluid: {
                    base64:
                      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCBAb/xAAkEAABAwMDBAMAAAAAAAAAAAABAgMEAAUREiEiBgcTMTJhgf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/8QAGxEBAAICAwAAAAAAAAAAAAAAAQADAiERUYH/2gAMAwEAAhEDEQA/AMv0z26jyGnpMmR4ghOpCSfl9VXvLi7eGzAVhWnxFJp1OcWk4C1AavQNJWedxb1cuR970a3N29R9NfPsShyUNhkftFTuxxPdA2GaKgKxCBqf/9k=",
                    aspectRatio: 1.948905109489051,
                    src:
                      "https://cdn.sanity.io/images/51bo9zth/production/f7497b733f3ac9fedc88246520ae00578c17ef53-1335x685.jpg?w=800&h=410&fit=crop",
                    srcSet:
                      "https://cdn.sanity.io/images/51bo9zth/production/f7497b733f3ac9fedc88246520ae00578c17ef53-1335x685.jpg?w=200&h=103&fit=crop 200w,\nhttps://cdn.sanity.io/images/51bo9zth/production/f7497b733f3ac9fedc88246520ae00578c17ef53-1335x685.jpg?w=400&h=205&fit=crop 400w,\nhttps://cdn.sanity.io/images/51bo9zth/production/f7497b733f3ac9fedc88246520ae00578c17ef53-1335x685.jpg?w=800&h=410&fit=crop 800w,\nhttps://cdn.sanity.io/images/51bo9zth/production/f7497b733f3ac9fedc88246520ae00578c17ef53-1335x685.jpg?w=1200&h=616&fit=crop 1200w",
                    sizes: "(max-width: 800px) 100vw, 800px",
                  },
                },
              },
              description:
                "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
            },
          },
        ],
      },
    }

    const tree = renderer.create(<Projects data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
