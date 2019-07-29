import { combineReducers } from "redux"
import loginState from "./loginState"
import mainState from "./mainState"

const appState = combineReducers({
  loginState,
  mainState,
})
export default appState