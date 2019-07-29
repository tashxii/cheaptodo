let id = 1

export default class Task {
  constructor(title, status) {
    this.id = id++
    this.title = title
    this.status = status
  }
}