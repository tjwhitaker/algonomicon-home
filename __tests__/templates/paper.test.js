import React from "react"
import renderer from "react-test-renderer"

import Paper from "../../src/templates/paper"

describe("Papers", () => {
  it("renders correctly", () => {
    const data = {
      paper: {
        title: "A Neural Algorithm of Artistic Style",
        author: "Leon A. Gatys, Alexander S. Ecker, Matthias Bethge",
        source: "https://arxiv.org/abs/1508.06576",
        _rawContent: [
          {
            _key: "073da56d0be6",
            _type: "block",
            children: [
              {
                _key: "073da56d0be60",
                _type: "span",
                marks: [],
                text: "",
              },
              {
                _key: "073da56d0be61",
                _type: "span",
                marks: ["3ea2cd8f2af8"],
                text: "",
              },
              {
                _key: "073da56d0be62",
                _type: "span",
                marks: [],
                text: "",
              },
              {
                _key: "073da56d0be63",
                _type: "span",
                marks: ["d962476c4bb7"],
                text:
                  "https://github.com/algonomicon/papers/tree/master/a-neural-algorithm-of-artistic-style",
              },
              {
                _key: "073da56d0be64",
                _type: "span",
                marks: [],
                text: "",
              },
              {
                _key: "073da56d0be65",
                _type: "span",
                marks: ["25f57d40c5db"],
                text: "",
              },
              {
                _key: "073da56d0be66",
                _type: "span",
                marks: [],
                text: "",
              },
            ],
            markDefs: [
              {
                _key: "3ea2cd8f2af8",
                _type: "link",
                href: "https://arxiv.org/abs/1508.06576",
              },
              {
                _key: "d962476c4bb7",
                _type: "link",
                href:
                  "https://github.com/algonomicon/papers/tree/master/a-neural-algorithm-of-artistic-style",
              },
              {
                _key: "25f57d40c5db",
                _type: "link",
                href: "https://arxiv.org/abs/1508.06576",
              },
            ],
            style: "normal",
          },
          {
            _key: "cd4708afa634",
            _type: "block",
            children: [
              {
                _key: "cd4708afa6340",
                _type: "span",
                marks: [],
                text: "Abstract",
              },
            ],
            markDefs: [],
            style: "h3",
          },
          {
            _key: "281fd585b11e",
            _type: "block",
            children: [
              {
                _key: "281fd585b11e0",
                _type: "span",
                marks: [],
                text:
                  "In fine art, especially painting, humans have mastered the skill to create unique visual experiences through composing a complex interplay between the content and style of an image. Thus far the algorithmic basis of this process is unknown and there exists no artificial system with similar capabilities. However, in other key areas of visual perception such as object and face recognition near-human performance was recently demonstrated by a class of biologically inspired vision models called Deep Neural Networks. Here we introduce an artificial system based on a Deep Neural Network that creates artistic images of high perceptual quality. The system uses neural representations to separate and recombine content and style of arbitrary images, providing a neural algorithm for the creation of artistic images. Moreover, in light of the striking similarities between performance-optimised artificial neural networks and biological vision, our work offers a path forward to an algorithmic understanding of how humans create and perceive artistic imagery.",
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
        _createdAt: "2019-04-18T15:33:31Z",
        _updatedAt: "2019-05-08T18:58:21Z",
      },
    }

    const tree = renderer.create(<Paper data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
