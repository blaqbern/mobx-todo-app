import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AddNew from './AddNew'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }
  handleAddTodo(todo) {
    this.props.store.addTodo(todo)
  }
  render() {
    const { todos } = this.props.store
    return (
      <div>
        <AddNew handleClick={this.handleAddTodo} />
        <ul>{todos.map((todo, id) => <li key={id}>{todo}</li>)}</ul>
      </div>
    )
  }
}
const { object } = React.PropTypes
TodoList.propTypes = { store: object }

export default observer(TodoList)
