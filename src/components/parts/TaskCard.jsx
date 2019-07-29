import React, { Component } from "react"
import { Modal } from "antd"
import styled from "styled-components"
import TaskForm from "./TaskForm"

const Card = styled.div`
  text-align: start;
  color: black;
  font-size: large;
  background-color: snow;
  width: 180px,
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px
`

class TaskCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEditTaskDialog: false,
    }
    this.toggleEditTaskDialog = this.toggleEditTaskDialog.bind(this)
  }

  render() {
    const task = this.props.task
    return (
      <div>
        <Card onDoubleClick={this.toggleEditTaskDialog}>
          Task:<div>{task.title}</div>
        </Card>
        <Modal
          visible={this.state.showEditTaskDialog}
          onCancel={this.toggleEditTaskDialog}
          footer={null}
          destroyOnClose
          width={400}
        >
          <TaskForm
            task={task}
            onSaveButtonClick={(id, title, status) => {
              this.props.onSaveButtonClick(id, title, status)
              this.toggleEditTaskDialog()
            }}
          />
        </Modal>
      </div>
    )
  }

  toggleEditTaskDialog() {
    this.setState({
      showEditTaskDialog: !this.state.showEditTaskDialog,
    })
  }
}

export default TaskCard