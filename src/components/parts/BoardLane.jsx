import React, { Component } from "react"
import styled from "styled-components"
import TaskCard from "./TaskCard"

const Lane = styled.div`
  text-align: center;
  vertical-align: top;
  margin-top: 5px;
  display: inline-block;
  width: 210px;
  min-height: calc(100vh - 250px);
  margin-left: 2px;
  border: dotted 1px cornflowerblue;
`

const TaskList = styled.div`
  flex-grow: 1;
  height: calc(100vh - 100px);
  min-height: calc(100vh - 180px);
  overflow: auto;
`

class BoardLane extends Component {
  render() {
    return (
      <Lane>
        Board:{this.props.board.name}
        <TaskList>
          {
            this.props.tasks.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  task={task}
                  onSaveButtonClick={this.props.onSaveButtonClick}
                />
              )
            })
          }
        </TaskList>
      </Lane>
    )
  }
}

export default BoardLane
