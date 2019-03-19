import { createStore } from '/react/redux.js'
import reducer from './reducer.js'
import { FILTER_TODOS_ALL } from './constants.js'

export default function configureStore() {

  const initialState = {
    todos: [],
    filter: FILTER_TODOS_ALL,
    filteredTodos: [],
    incompleteCount: 0,
    editing: null
  }

  return createStore(reducer, initialState)
}