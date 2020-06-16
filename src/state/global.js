const MOBILE = "mobile"
const MENU = "menu"

const initialState = {
  mobile: false,
  menu: false,
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

export default (state = initialState, action) => {
  switch (action.type) {
    case MOBILE:
      return Object.assign({}, state, {
        mobile: action.bool,
      })

    case MENU:
      return Object.assign({}, state, {
        menu: action.bool,
      })

    default:
      return state
  }
}
