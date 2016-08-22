import { observable } from 'mobx'

class TodoStore {
  @observable todos = []
  @observable filter = ''

  addTodo(todo) {
    this.todos.push(todo)
  }
}

export default new TodoStore()
