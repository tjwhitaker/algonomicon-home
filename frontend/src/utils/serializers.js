import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

export default {
  types: {
    code: props => (
      <SyntaxHighlighter
        language={props.node.language || "julia"}
        style={tomorrow}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
}
