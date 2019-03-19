import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  UPDATE_TODO_TITLE,
  SET_TODO_COMPLETE,
  SET_TODO_INCOMPLETE,
  FILTER_TODOS_COMPLETE,
  FILTER_TODOS_INCOMPLETE,
  FILTER_TODOS_ALL,
  TOGGLE_ALL_TODOS
} from './constants.js'

import addTodo from '/todo-list/add-todo.js'
import getCompleteTodos from '/todo-list/get-complete-todos.js'
import getIncompleteTodos from '/todo-list/get-incomplete-todos.js'
import newTodo from '/todo/new-todo.js'
import removeTodo from '/todo-list/remove-todo.js'
import setComplete from '/todo/set-complete.js'
import setTitle from '/todo/set-title.js'
import toggleAllTodos from '/todo-list/toggle-all-todos.js'
import updateTodo from '/todo-list/update-todo.js'

function filter(todos, filterType) {
  switch(filterType) {
    case FILTER_TODOS_COMPLETE:
      return getCompleteTodos(todos)
    case FILTER_TODOS_INCOMPLETE:
      return getIncompleteTodos(todos)
    default:
      return todos
  }
}

function filteredAndCounted(state, updates) {
  state = Object.assign({}, state, updates)
  let filteredTodos = filter(state.todos, state.filter)
  let incompleteCount = getIncompleteTodos(state.todos).length

  return Object.assign(
    {},
    state,
    {
      filteredTodos,
      incompleteCount
    }
  )
}

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return filteredAndCounted(state, { todos: addTodo(state.todos, newTodo(action.title)) })
    case REMOVE_TODO:
      return filteredAndCounted(state, { todos: removeTodo(state.todos, action.id) })
    case EDIT_TODO:
      return Object.assign({}, state, { currentlyEditingId: action.id })
    case CANCEL_EDIT_TODO:
      return Object.assign({}, state, { currentlyEditingId: null })
    case UPDATE_TODO_TITLE:
      return filteredAndCounted(
        state,
        { todos: updateTodo(state.todos, action.id, todo => setTitle(todo, action.title )), currentlyEditingId: null }
      )
    default:
      return state
  }
}

