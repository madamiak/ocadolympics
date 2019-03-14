import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import SignUps from '../SignUps/SignUps';

const Content = styled.div`
  margin: 0.5rem;
`;

const ConfirmationDialog = props => {
  return (
    <Modal
      headerText='Confirm action'
      show={ props.show }
      acceptHandler={ props.acceptHandler }
      cancelHandler={ props.cancelHandler }
    >
      <Content>Do you want to sign up for selected disciplines?</Content>
      <SignUps signUps={ props.signUps } disciplines={ props.disciplines }/>
    </Modal>
  );
};

export default ConfirmationDialog;
