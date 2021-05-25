import React from "react"
import { Provider } from "overmind-react"
import { createOvermindSSR } from "overmind"
import { config } from "./src/overmind"

const overmind = createOvermindSSR(config)

export const wrapPageElement = ({ element }) => (
  <Provider value={createOvermind(config)}>
    {element}
  </Provider>
)