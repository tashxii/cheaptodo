import { NEW_TASK_EVENT, EDIT_TASK_EVENT } from "../actions"
import Board from "../libs/models/board"
import Task from "../libs/models/task";

const initialState = {
  boards: [
    new Board(Board.names[0]),
    new Board(Board.names[1]),
    new Board(Board.names[2]),
  ],
  boardTasks: {
    [Board.names[0]]: [],
    [Board.names[1]]: [],
    [Board.names[2]]: [],
  }
}
const loginState = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload
  switch (type) {
    case NEW_TASK_EVENT: {
      const task = new Task(payload.title, payload.status)
      state.boardTasks[payload.status].push(task)
      return { ...state }
    }
    case EDIT_TASK_EVENT: {
      let orgIndex = 0
      let orgStatus = ""
      let orgTask
      Board.names.forEach(name => {
        for (let i = 0; i < state.boardTasks[name].length; i++) {
          const task = state.boardTasks[name][i]
          if (task.id === payload.id) {
            orgTask = task
            orgStatus = task.status
            orgIndex = i
            break
          }
        }
      })
      orgTask.title = payload.title
      orgTask.status = payload.status
      if (orgStatus !== payload.status) {
        state.boardTasks[orgStatus].splice(orgIndex, 1)
        state.boardTasks[payload.status].push(orgTask)
      }
      return { ...state }
    }
    default:
      return state
  }
}

export default loginState