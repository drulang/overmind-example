import React from "react"
import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import { config } from "./src/overmind"

const overmind = createOvermind(config);

export const wrapPageElement = ({ element }) => (
  <Provider value={createOvermind(config)}>
    {element}
  </Provider>
)