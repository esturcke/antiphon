// @flow
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "minireset.css/minireset.css"
import "./global.css"

const root = document.getElementById("root")
ReactDOM.render(<App />, root)

if (module.hot) {
  // $FlowFixMe: No webpack flow types
  module.hot.accept("./App", () => {
    const Next = require("./App").default
    ReactDOM.render(<Next />, root)
  })
}
