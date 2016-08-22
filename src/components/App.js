import React from 'react'

import store from '../mobx/TodoStore'
import TodoList from './TodoList'

export default function App(/* {} */) {
  return (
    <TodoList store={store} />
  )
}
