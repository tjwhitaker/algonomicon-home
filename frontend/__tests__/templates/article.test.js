import React from "react"
import renderer from "react-test-renderer"

import Article from "../../src/templates/article"

describe("Article", () => {
  it("renders correctly", () => {
    const data = {
      "article": {
        "title": "Getting Flux and Cuda to Work with Julia Pro",
        "description": "The fundamental concepts of classical physics, space, time, mass, and derived concepts, velocity, momentum, force, angular momentum, energy ... all rest on the principle that material points have trajectories. They are defined as lines in space-time. Even the dynamics of continuous, solid or fluid media describes the trajectories of the material points which constitute the bodies in motion. But the indeterminacy relation of Heisenberg prevents quantum particles from having such classical trajectories, since their position and velocity can not be exactly defined at the same time. How then can it explain all the appearances which legitimize the fundamental concepts of classical physics?",
        "author": "Tim Whitaker",
        "_rawOutline": [
          {
            "_key": "7fc97291f2db",
            "_type": "block",
            "children": [
              {
                "_key": "7fc97291f2db0",
                "_type": "span",
                "marks": [],
                "text": "Introduction"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0f64ff8d59ea",
            "_type": "block",
            "children": [
              {
                "_key": "0f64ff8d59ea0",
                "_type": "span",
                "marks": [],
                "text": "Prerequisites"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0e09a335430a",
            "_type": "block",
            "children": [
              {
                "_key": "0e09a335430a0",
                "_type": "span",
                "marks": [],
                "text": "Install cuda"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "32acdfce25cd",
            "_type": "block",
            "children": [
              {
                "_key": "32acdfce25cd0",
                "_type": "span",
                "marks": [],
                "text": "Install cudnn"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "23e967b3a0c7",
            "_type": "block",
            "children": [
              {
                "_key": "23e967b3a0c70",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ],
        "_rawContent": [
          {
            "_key": "4aa839ce6906",
            "_type": "block",
            "children": [
              {
                "_key": "4aa839ce69060",
                "_type": "span",
                "marks": [],
                "text": "I've spent the last two days trying to get "
              },
              {
                "_key": "4aa839ce69061",
                "_type": "span",
                "marks": [
                  "20363135f3c6"
                ],
                "text": "Flux"
              },
              {
                "_key": "4aa839ce69062",
                "_type": "span",
                "marks": [],
                "text": " to work with GPUs through the Julia Pro IDE. "
              }
            ],
            "markDefs": [
              {
                "_key": "20363135f3c6",
                "_type": "link",
                "href": "https://fluxml.ai"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "926f012984f6",
            "_type": "block",
            "children": [
              {
                "_key": "926f012984f60",
                "_type": "span",
                "marks": [],
                "text": "Flux is a new elegant machine learning library. It offers a mathematical approach to building neural networks, and this allows it be insanely expressive and understandable at the same time. While not quite as mature as Pytorch or Tensorflow, I think Flux is going to be the foundation for the next generation of machine learning research."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2d8eacf1eae3",
            "_type": "block",
            "children": [
              {
                "_key": "2d8eacf1eae30",
                "_type": "span",
                "marks": [],
                "text": "Julia Pro is a \"batteries-included\" IDE for Julia. It's an extension to Github's Atom editor, and it's the easiest and fastest way to get up and running with Julia. It provides a bundled Julia compiler, a REPL, a debugger, code completion, unicode/latex symbols, plotting, documentation, and real-time feedback all in one. It provides a curated list of packages that have been fully tested for use with the Juno IDE. This means all of the included packages should work and be of the highest quality but, many external packages may not be available without some modification."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "a553cd299c41",
            "_type": "block",
            "children": [
              {
                "_key": "a553cd299c410",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fd28f8d33874",
            "_type": "block",
            "children": [
              {
                "_key": "fd28f8d338740",
                "_type": "span",
                "marks": [],
                "text": "Installation"
              }
            ],
            "markDefs": [],
            "style": "h3"
          },
          {
            "_key": "2364b324123e",
            "_type": "block",
            "children": [
              {
                "_key": "2364b324123e0",
                "_type": "span",
                "marks": [],
                "text": "Adding the General Registry"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fbd4ad1e6e1c",
            "_type": "block",
            "children": [
              {
                "_key": "fbd4ad1e6e1c0",
                "_type": "span",
                "marks": [],
                "text": "git clone https://github.com/JuliaRegistries/General"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8a6bcbbb4691",
            "_type": "block",
            "children": [
              {
                "_key": "8a6bcbbb46910",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b7a43fe4a757",
            "_type": "block",
            "children": [
              {
                "_key": "b7a43fe4a7570",
                "_type": "span",
                "marks": [],
                "text": "CUDAdrv bugs I've run into"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9a9abc64eb7d",
            "_type": "block",
            "children": [
              {
                "_key": "9a9abc64eb7d0",
                "_type": "span",
                "marks": [],
                "text": "My computer went to sleep. Could see that GPU was there and cuda enabled through nvidia-smi. But cudadrv couldn't find the kernel module. Fix it by restarting computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9592a605a20a",
            "_type": "block",
            "children": [
              {
                "_key": "9592a605a20a0",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "66cdf4f76529",
            "_type": "block",
            "children": [
              {
                "_key": "66cdf4f765290",
                "_type": "span",
                "marks": [],
                "text": "CuArrays GPU compilation error"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ee3065b1fad3",
            "_type": "block",
            "children": [
              {
                "_key": "ee3065b1fad30",
                "_type": "span",
                "marks": [],
                "text": "Problem with accuracy function"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e94dbebdc172",
            "_type": "block",
            "children": [
              {
                "_key": "e94dbebdc1720",
                "_type": "span",
                "marks": [],
                "text": "Need to send these to the GPU"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ca009378aba3",
            "_type": "block",
            "children": [
              {
                "_key": "ca009378aba30",
                "_type": "span",
                "marks": [],
                "text": "accuracy(x, y) = mean(onecold(m(x)) |> gpu .== onecold(y) |> gpu)"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "aa52275f9ad4",
            "_type": "block",
            "children": [
              {
                "_key": "aa52275f9ad40",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ],
        "_createdAt": "2019-05-02T03:13:19Z",
        "_updatedAt": "2019-05-09T17:37:33Z"
      }
    }

    const tree = renderer.create(<Article data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
