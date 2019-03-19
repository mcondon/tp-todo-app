import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  CANCEL_EDIT_TODO,
  UPDATE_TODO_TITLE,
  SET_TODO_COMPLETE,
  SET_TODO_INCOMPLETE
} from './constants.js'

export const addTodo = (title) => ({
  type: ADD_TODO,
  title
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
})

export const editTodo = (id) => ({
  type: EDIT_TODO,
  id
})

export const cancelEditTodo = (id) => ({
  type: CANCEL_EDIT_TODO,
  id
})

export const updateTodoTitle = (id, title) => ({
  type: UPDATE_TODO_TITLE,
  id,
  title
})

export const setTodoComplete = (id) => ({
  type: SET_TODO_COMPLETE,
  id
})

export const setTodoIncomplete = (id) => ({
  type: SET_TODO_INCOMPLETE,
  id
})