import React from 'react';
import Modal from '../Modal/Modal';
import SignUps from '../SignUps/SignUps';

const ConfirmationDialog = props => {
  return (
    <Modal show={ props.show } acceptHandler={ props.acceptHandler } cancelHandler={ props.cancelHandler }>
      Do you want to sign up for selected disciplines?
      <SignUps signUps={ props.signUps } disciplines={ props.disciplines }/>
    </Modal>
  );
};

export default ConfirmationDialog;
