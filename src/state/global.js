const MOBILE = "mobile"
const MENU = "menu"
const USER = "user"
const LOADED = "loaded"
const SEARCH_RESULTS = "search:results"
const SEARCH_TOGGLE = "search:toggle"
const RESULTS_TOGGLE = "results:toggle"

const initialState = {
  mobile: false,
  menu: false,
  loaded: false,
  searchResults: null,
  resultsOpen: false,
  searchOpen: false,
  user: {
    firstName: null,
    lastName: null,
    email: null,
    zip: null,
    phoneNumber: null,
  },
}
export const setLoaded = bool => {
  return {
    type: LOADED,
    bool,
  }
}
export const setMobile = bool => {
  return {
    type: MOBILE,
    bool,
  }
}
export const setMenu = bool => {
  return {
    type: MENU,
    bool,
  }
}
export const setUser = obj => {
  return {
    type: USER,
    obj,
  }
}
export const setSearchResults = obj => {
  return {
    type: SEARCH_RESULTS,
    obj,
  }
}
export const setSearchOpen = bool => {
  return {
    type: SEARCH_TOGGLE,
    bool,
  }
}
export const setSearchResultsOpen = bool => {
  return {
    type: RESULTS_TOGGLE,
    bool,
  }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return Object.assign({}, state, {
        loaded: action.bool,
      })
    case MOBILE:
      return Object.assign({}, state, {
        mobile: action.bool,
      })
    case MENU:
      return Object.assign({}, state, {
        menu: action.bool,
      })
    case USER:
      return Object.assign({}, state, {
        user: action.obj,
      })
    case SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: action.obj,
      })
    case SEARCH_TOGGLE:
      return Object.assign({}, state, {
        searchOpen: action.bool,
      })
    case RESULTS_TOGGLE:
      return Object.assign({}, state, {
        resultsOpen: action.bool,
      })
    default:
      return state
  }
}
