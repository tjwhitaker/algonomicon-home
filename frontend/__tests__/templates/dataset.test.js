import React from "react"
import renderer from "react-test-renderer"

import Dataset from "../../src/templates/dataset"

describe("Dataset", () => {
  it("renders correctly", () => {
    const data = {
      "dataset": {
        "title": "MNIST",
        "description": "Handwritten digits",
        "creator": "Yann LeCunn,  Corinna Cortes, Christopher J.C. Burges",
        "format": "CSV",
        "instances": 70000,
        "_createdAt": "2019-04-17T17:03:27Z",
        "_updatedAt": "2019-05-08T18:36:23Z",
        "_rawContent": [
          {
            "_key": "d600a1dfb78b",
            "_type": "block",
            "children": [
              {
                "_key": "d600a1dfb78b0",
                "_type": "span",
                "marks": [],
                "text": "The MNIST dataset is a collection of images of handwritten digits. Each image is greyscale, centered and sized to 28x28 pixels. The original dataset ("
              },
              {
                "_key": "d600a1dfb78b1",
                "_type": "span",
                "marks": [
                  "cad7f44e75e7"
                ],
                "text": "http://yann.lecun.com/exdb/mnist"
              },
              {
                "_key": "d600a1dfb78b2",
                "_type": "span",
                "marks": [],
                "text": ") is provided as a custom format of bytes. The files we provide here are processed, formatted and converted to csv in order to make it easier to use."
              }
            ],
            "markDefs": [
              {
                "_key": "cad7f44e75e7",
                "_type": "link",
                "href": "http://yann.lecun.com/exdb/mnist"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "f723eabf74b8",
            "_type": "block",
            "children": [
              {
                "_key": "f723eabf74b80",
                "_type": "span",
                "marks": [],
                "text": "Format"
              }
            ],
            "markDefs": [],
            "style": "h3"
          },
          {
            "_key": "36bfc1e58f26",
            "_type": "block",
            "children": [
              {
                "_key": "36bfc1e58f260",
                "_type": "span",
                "marks": [],
                "text": "Images: 60,000/10,000 (train/test) instances where each instance is seperated by a newline. Each row is a series of 784 (28x28) comma-separated floats which represent pixel values. Each pixel has a value between 0 and 1, corresponding to the intensity of the brightness, where 0 is black and 1 is white."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1b90755fd95a",
            "_type": "block",
            "children": [
              {
                "_key": "1b90755fd95a0",
                "_type": "span",
                "marks": [],
                "text": "Labels: 60,000/10,000 (train/test) instances corresponding to the images csv. Each instance is seperated by a newline and each contains a digit from 0 to 9."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c473a5ee82d5",
            "_type": "block",
            "children": [
              {
                "_key": "c473a5ee82d50",
                "_type": "span",
                "marks": [],
                "text": "Data"
              }
            ],
            "markDefs": [],
            "style": "h3"
          },
          {
            "_key": "8ee3e67c9275",
            "_type": "block",
            "children": [
              {
                "_key": "8ee3e67c92750",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "8ee3e67c92751",
                "_type": "span",
                "marks": [
                  "203880c821b1"
                ],
                "text": "https://data.algonomicon.com/mnist-images-train.csv"
              },
              {
                "_key": "8ee3e67c92752",
                "_type": "span",
                "marks": [],
                "text": " (303.4 MB, 784x60000{Float})"
              }
            ],
            "level": 1,
            "markDefs": [
              {
                "_key": "203880c821b1",
                "_type": "link",
                "href": "https://data.algonomicon.com/mnist-images-train.csv"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "247207a77480",
            "_type": "block",
            "children": [
              {
                "_key": "247207a774800",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "247207a774801",
                "_type": "span",
                "marks": [
                  "b4353dbc1124"
                ],
                "text": ""
              },
              {
                "_key": "247207a774802",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "247207a774803",
                "_type": "span",
                "marks": [
                  "7c2bb3a0c558"
                ],
                "text": "https://data.algonomicon.com/mnist-labels-train.csv"
              },
              {
                "_key": "247207a774804",
                "_type": "span",
                "marks": [],
                "text": " (117.2 KB, 1x60000{Int})"
              }
            ],
            "level": 1,
            "markDefs": [
              {
                "_key": "b4353dbc1124",
                "_type": "link",
                "href": "https://data.algonomicon.com/mnist-labels-train.csv"
              },
              {
                "_key": "7c2bb3a0c558",
                "_type": "link",
                "href": "https://data.algonomicon.com/mnist-labels-train.csv"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "4c9bd6339dba",
            "_type": "block",
            "children": [
              {
                "_key": "4c9bd6339dba0",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "4c9bd6339dba1",
                "_type": "span",
                "marks": [
                  "cfd82e8e496c"
                ],
                "text": ""
              },
              {
                "_key": "4c9bd6339dba2",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "4c9bd6339dba3",
                "_type": "span",
                "marks": [
                  "994dbf276215"
                ],
                "text": "https://data.algonomicon.com/mnist-images-test.csv"
              },
              {
                "_key": "4c9bd6339dba4",
                "_type": "span",
                "marks": [],
                "text": " (50.7 MB, 784x10000{Float})"
              }
            ],
            "level": 1,
            "markDefs": [
              {
                "_key": "cfd82e8e496c",
                "_type": "link",
                "href": "https://data.algonomicon.com/mnist-images-test.csv"
              },
              {
                "_key": "994dbf276215",
                "_type": "link",
                "href": "https://data.algonomicon.com/mnist-images-test.csv"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "338256340b4d",
            "_type": "block",
            "children": [
              {
                "_key": "338256340b4d0",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "338256340b4d1",
                "_type": "span",
                "marks": [
                  "c1a8d59cb775"
                ],
                "text": "https://data.algonomicon.com/mnist-labels-test.csv"
              },
              {
                "_key": "338256340b4d2",
                "_type": "span",
                "marks": [],
                "text": " (19.5 KB, 1x10000{Int})"
              }
            ],
            "level": 1,
            "markDefs": [
              {
                "_key": "c1a8d59cb775",
                "_type": "link",
                "href": "https://data.algonomicon.com/mnist-labels-test.csv"
              }
            ],
            "style": "normal"
          }
        ]
      }
    }

    const tree = renderer.create(<Dataset data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
