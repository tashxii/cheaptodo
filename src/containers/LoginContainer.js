import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import LoginPage from "../components/pages/LoginPage"
import { loginEvent } from "../actions"

const mapStateToProps = (state) => ({
  loginState: state.loginState,
})

const mapDispatchToProps = (dispatch) => ({
  onLoginButtonClick: () => {
    dispatch(loginEvent())
  },
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default withRouter(LoginContainer)