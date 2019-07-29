import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import LoginContainer from "../containers/LoginContainer"
import MainContainer from "../containers/MainContainer"
import "antd/dist/antd.css"

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/index.html" component={LoginContainer} />
      <Route path="/main" component={MainContainer} />
    </div>
  </BrowserRouter>
)
export default App