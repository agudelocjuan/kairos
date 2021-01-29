const MOBILE = "mobile"
const MENU = "menu"
const USER = "user"
const LOADED = "loaded"
const initialState = {
  mobile: false,
  menu: false,
  loaded: false,
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
    default:
      return state
  }
}