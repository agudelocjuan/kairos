const MOBILE = "mobile"

const initialState = {
  mobile: false,
}

export const setMobile = bool => {
  return {
    type: MOBILE,
    bool,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MOBILE:
      return Object.assign({}, state, {
        mobile: action.bool,
      })

    default:
      return state
  }
}
