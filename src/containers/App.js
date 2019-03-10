import React, { Component } from 'react';
import DisciplineSignup from './DisciplineSignup/DisciplineSignup';
import ListSignUps from './ListSignUps/ListSignUps';
import { connect } from 'react-redux';

export class App extends Component {

  render() {
    if (!this.props.submitted) {
      return <DisciplineSignup/>;
    } else {
      return <ListSignUps/>;
    }
  }

}

const mapStateToProps = state => ({
  submitted: state.submitted
});

export default connect(mapStateToProps)(App);
