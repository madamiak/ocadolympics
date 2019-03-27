import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import DisciplineSignup from './DisciplineSignup/DisciplineSignup';
import ListSignUps from './ListSignUps/ListSignUps';

export class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/signup' component={ DisciplineSignup }/>
        <Route path='/signups' component={ ListSignUps }/>
        <Redirect from='/' to={ '/signup' }/>
      </Switch>
    );
  }

}

export default connect()(App);
