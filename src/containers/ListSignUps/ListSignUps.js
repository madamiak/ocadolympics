import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUps from '../../components/SignUps/SignUps';
import Toasts from '../../components/Toasts/Toasts';

export class ListSignUps extends Component {
  render() {
    return (
      <>
        <Toasts/>
        <SignUps signUps={ this.props.signUps } disciplines={ this.props.disciplines }/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  disciplines: state.signUps.disciplines,
  signUps: state.signUps.signUps
});

export default connect(mapStateToProps)(ListSignUps);
