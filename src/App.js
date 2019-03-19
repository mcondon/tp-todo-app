import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './redux/simpleAction';

import './App.css';

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.simpleAction}>Test redux action</button>
        <pre>{ JSON.stringify(this.props, true, 4) }</pre>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
