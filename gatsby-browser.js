import { store } from "./src/state/ReduxWrapper"
import { setSearchOpen, setSearchResultsOpen } from "./src/state/global"

export const onRouteUpdate = () => {
  store.dispatch(setSearchOpen(false))
  store.dispatch(setSearchResultsOpen(false))
}

export { default as wrapRootElement } from "./src/state/ReduxWrapper"
