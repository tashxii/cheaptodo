export const LOGOUT_EVENT = "LOGOUT_EVENT"
export const NEW_TASK_EVENT = "NEW_TASK_EVENT"
export const EDIT_TASK_EVENT = "EDIT_TASK_EVENT"

export const logoutEvent = () => ({
  type: LOGOUT_EVENT,
  payload: {
  }
})

export const newTaskEvent = (id, title, status) => ({
  type: NEW_TASK_EVENT,
  payload: {
    id,
    title,
    status,
  }
})

export const editTaskEvent = (id, title, status) => ({
  type: EDIT_TASK_EVENT,
  payload: {
    id,
    title,
    status,
  }
})
