import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "."

const initStore = () => {
  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })
  const store = createStore(rootReducer, composeEnhancers())
  return store
}

export const store = initStore()

export default ({ element }) => <Provider store={store}>{element}</Provider>
