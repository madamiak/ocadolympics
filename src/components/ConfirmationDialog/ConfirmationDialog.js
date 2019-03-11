import React from 'react';
import Modal from '../Modal/Modal';

const ConfirmationDialog = props => {
  return (
    <Modal show={ props.show } acceptHandler={ props.acceptHandler } cancelHandler={ props.cancelHandler }>
      Do you want to sign up for selected disciplines?
    </Modal>
  );
};

export default ConfirmationDialog;
