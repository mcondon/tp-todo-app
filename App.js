import React, { Component } from '/react/react.js'
import { connect } from '/react/react-redux.js'
import { simpleAction } from './simple-redux/simpleAction.js'

const h = React.createElement

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {
  render() {
    return (
      h(
        'div',
        {},
        h(
          'button',
          { onClick: this.props.simpleAction },
          'Test redux action'
        ),
        h(
          'pre',
          {},
          JSON.stringify(this.props, true, 4)
        )
      )
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
