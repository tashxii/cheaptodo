import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import MainPage from "../components/pages/MainPage"
import { logoutEvent, newTaskEvent, editTaskEvent } from "../actions"

const mapStateToProps = (state) => ({
  loginState: state.loginState,
  mainState: state.mainState,
})

const mapDispatchToProps = (dispatch) => ({
  onLogoutButtonClick: () => {
    dispatch(logoutEvent())
  },
  onNewTaskButtonClick: (id, title, status) => {
    dispatch(newTaskEvent(id, title, status))
  },
  onSaveTaskButtonClick: (id, title, status) => {
    dispatch(editTaskEvent(id, title, status))
  },
})

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)

export default withRouter(MainContainer)