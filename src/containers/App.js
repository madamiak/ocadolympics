import React, { Component } from 'react';
import DisciplineSignup from './DisciplineSignup/DisciplineSignup';

class App extends Component {

  render() {
    return <DisciplineSignup disciplines={this.props.disciplines}/>;
  }

}

export default App;
