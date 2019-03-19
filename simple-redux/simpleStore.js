import { createStore } from '/react/redux.js'
import rootReducer from './rootReducer.js'
export default function configureStore(initialState = {}) {
 return createStore(
  rootReducer,
  initialState
 )
}