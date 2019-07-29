import React, { Component } from "react"
import { Button } from "antd"

class LoginForm extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onLoginButtonClick}>ログイン</Button>
      </div>
    )
  }
}

export default LoginForm
