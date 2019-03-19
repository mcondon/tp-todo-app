import { createStore, applyMiddleware } from '/react/redux.js'
import reducer from './reducer.js'
import { FILTER_TODOS_ALL } from './constants.js'
import { getInitialState, localStorageMiddleware } from './local-storage-middleware.js'

const storageKey = 'todo-list-app'

const defaultState = {
  todos: [],
  filter: FILTER_TODOS_ALL,
  filteredTodos: [],
  incompleteCount: 0,
  totalCount: 0,
  currentlyEditingId: null
}

export default function configureStore() {

  const initialState = getInitialState(storageKey) || defaultState;

  return createStore(reducer, initialState, applyMiddleware(localStorageMiddleware(storageKey)))
}