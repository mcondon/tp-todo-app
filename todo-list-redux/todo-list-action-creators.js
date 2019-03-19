import {
  FILTER_TODOS_COMPLETE,
  FILTER_TODOS_INCOMPLETE,
  FILTER_TODOS_ALL,
  TOGGLE_ALL_TODOS
} from './constants.js'

export const filterTodosAll = () => ({
  type: FILTER_TODOS_ALL
})

export const filterTodosComplete = () => ({
  type: FILTER_TODOS_COMPLETE
})

export const filterTodosIncomplete = () => ({
  type: FILTER_TODOS_INCOMPLETE
})

export const toggleAllTodos = () => ({
  type: TOGGLE_ALL_TODOS
})
