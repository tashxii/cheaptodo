import React, { Component } from "react"
import styled from "styled-components"
import { Row, Col, Input, Button, Select } from "antd"
import Board from "../../libs/models/board";

const Title = styled.div`
  color: blue;
  font-size: large;
  margin-bottom: 10px;
`

class TaskForm extends Component {
  constructor(props) {
    super(props)
    const task = props.task
    this.state = {
      title: task.title,
      status: task.status,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }

  render() {
    return (
      <div>
        <Title>Task</Title>
        <Col>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={8}>
              Title:
            </Col>
            <Col span={16}>
              <Input
                autoFocus={true}
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              Status:
            </Col>
            <Col span={16}>
              <Select
                style={{ marginRight: "20px", width: "200px", verticalAlign: "top" }}
                onChange={this.handleStatusChange}
                value={this.state.status}
                dropdownMatchSelectWidth={false}
              >
                {Board.names.map(name => {
                  return (
                    <Select.Option key={name}>
                      {name}
                    </Select.Option>
                  )
                })}
              </Select>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Button
              onClick={
                () => {
                  this.props.onSaveButtonClick(this.props.task.id, this.state.title, this.state.status)
                }
              }
              style={{ float: "right" }}
            >
              Save
            </Button>
          </Row>
        </Col>
      </div >
    )
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleStatusChange(value) {
    this.setState({ status: value })
  }
}

export default TaskForm
