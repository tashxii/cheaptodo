import React, { Component } from "react"
import styled from "styled-components"
import { Redirect } from "react-router-dom"
import { Button, Col, Row, Modal } from "antd"
import BoardLane from "../parts/BoardLane"
import TaskForm from "../parts/TaskForm";
import Task from "../../libs/models/task";
import Board from "../../libs/models/board";

const MenuBar = styled.div`
  color: blue;
  background-color: lavender;
  height: 35px;
`

const TaskArea = styled.div`
  background-color: paleturquoise;
`

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewTaskDialog: false,
    }
    this.toggleNewTaskDialog = this.toggleNewTaskDialog.bind(this)
  }

  render() {
    if (!this.props.loginState.isLogin) {
      return <Redirect to="/" />
    }
    return (
      <Col>
        <Row >
          <MenuBar>
            <div style={{ display: "inline-block" }}>
              メニューバー（ダミー）
            </div>
            <div style={{ float: "right", display: "inline-block" }}>
              <Button type="default" onClick={this.props.onLogoutButtonClick}>ログアウト</Button>
            </div>
          </MenuBar>
        </Row>
        <Row>
          <TaskArea>
            <div style={{ height: "30px" }}>
              <Button type="primary" onClick={this.toggleNewTaskDialog}>新規タスク</Button>
            </div>
            {this.props.mainState.boards.map(board =>
              (
                <BoardLane
                  key={board.name}
                  board={board}
                  tasks={this.props.mainState.boardTasks[board.name]}
                  onSaveButtonClick={this.props.onSaveTaskButtonClick} />
              )
            )}
          </TaskArea>
        </Row>
        <Modal
          visible={this.state.showNewTaskDialog}
          onCancel={this.toggleNewTaskDialog}
          footer={null}
          destroyOnClose
          width={400}
        >
          <TaskForm
            task={new Task("", Board.names[0])}
            onSaveButtonClick={(id, title, status) => {
              this.props.onNewTaskButtonClick(id, title, status)
              this.toggleNewTaskDialog()
            }}
          />
        </Modal>
      </Col>
    )
  }

  toggleNewTaskDialog() {
    this.setState({
      showNewTaskDialog: !this.state.showNewTaskDialog,
    })
  }
}

export default MainPage
