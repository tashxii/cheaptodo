import {
  LOGIN_EVENT,
  LOGOUT_EVENT,
} from "../actions";

const initialState = {
  isLogin: false
}
const loginState = (state = initialState, action) => {
  const type = action.type
  switch (type) {
    case LOGIN_EVENT:
      return { ...state, isLogin: true }
    case LOGOUT_EVENT:
      return { ...state, isLogin: false }
    default:
      return state
  }
}

export default loginState