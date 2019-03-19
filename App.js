import React, { Component } from '/react/react.js'
import { connect } from '/react/react-redux.js'
import TodoListManager from '/components/todo-list-manager.js'
import {
  addTodo,
  removeTodo
} from './todo-list-redux/todo-action-creators.js'

const h = React.createElement

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
  removeTodo: id => dispatch(removeTodo(id))
})

class App extends Component {
  render() {
    return h(TodoListManager, this.props)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
