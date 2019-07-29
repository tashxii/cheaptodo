import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import LoginForm from "../parts/LoginForm"

class LoginPage extends Component {
  render() {
    if (this.props.loginState.isLogin) {
      return <Redirect to="/main" />
    }
    return (
      <LoginForm {...this.props} />
    )
  }
}

export default LoginPage
