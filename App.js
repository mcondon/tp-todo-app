import React, { Component } from '/react/react.js'
import { connect } from '/react/react-redux.js'
import TodoListManager from '/components/todo-list-manager.js'
import {
  addTodo,
  removeTodo,
  editTodo,
  cancelEditTodo,
  updateTodoTitle,
  setTodoComplete,
  setTodoIncomplete
} from './todo-list-redux/todo-action-creators.js'
import {
  filterTodosAll,
  filterTodosComplete,
  filterTodosIncomplete,
  toggleAllTodos
} from './todo-list-redux/todo-list-action-creators.js'

const h = React.createElement

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
  removeTodo: id => dispatch(removeTodo(id)),
  editTodo: id => dispatch(editTodo(id)),
  cancelEditTodo: id => dispatch(cancelEditTodo(id)),
  updateTodoTitle: (id, title) => dispatch(updateTodoTitle(id, title)),
  setTodoComplete: id => dispatch(setTodoComplete(id)),
  setTodoIncomplete: id => dispatch(setTodoIncomplete(id)),
  filterTodosAll: () => dispatch(filterTodosAll()),
  filterTodosComplete: () => dispatch(filterTodosComplete()),
  filterTodosIncomplete: () => dispatch(filterTodosIncomplete()),
  toggleAllTodos: () => dispatch(toggleAllTodos())
})

class App extends Component {
  render() {
    return h(TodoListManager, this.props)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
