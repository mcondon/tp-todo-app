import React from '/react/react.js'
import ReactDOM from '/react/react-dom.js'
import { Provider } from '/react/react-redux.js'
import configureStore from './simple-redux/simpleStore.js'
import App from './App.js'

const h = React.createElement

ReactDOM.render(
  h(
    Provider,
    { store: configureStore() },
    h(
      App
    )
  ),
  document.getElementById('root')
)