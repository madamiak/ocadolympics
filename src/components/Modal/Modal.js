import React from 'react';
import styled, { css } from 'styled-components';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const StyledModal = styled.section`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  box-shadow: 1px 1px 1px black;
  padding: 1rem;
  left: 15%;
  top: 20%;
  
  ${ props => props.show ?
  css`
    transform: translateY(0);
    opacity: 1;
  ` :
  css`
    transform: translateY(-1000vh);
    opacity: 0;
  ` }
`;

const StyledModalHeader = styled.header`
  padding: 1rem;
  text-align: center;
  font-weight: 700;
`;

const StyledModalContent = styled.main`
  padding: 1rem;
`;

const StyledModalFooter = styled.footer`
  margin: 1rem;
  display: flex;
`;

const StyledButton = styled(Button)`
  width: 50%;
  margin: 0 0.2rem;
`;

const Modal = props => {
  return (
    <>
      <Backdrop show={ props.show } clickHandler={ props.cancelHandler }/>
      <StyledModal show={ props.show }>
        <ModalHeader>{ props.headerText }</ModalHeader>
        <ModalContent>{ props.children }</ModalContent>
        <ModalFooter acceptHandler={ props.acceptHandler } cancelHandler={ props.cancelHandler }/>
      </StyledModal>
    </>
  );
};

const ModalHeader = props => {
  return <StyledModalHeader>{ props.children }</StyledModalHeader>;
};

const ModalContent = props => {
  return <StyledModalContent>{ props.children }</StyledModalContent>;
};

const ModalFooter = props => {
  return (
    <>
      <hr/>
      <StyledModalFooter>
        <StyledButton onClick={ props.cancelHandler }>Cancel</StyledButton>
        <StyledButton onClick={ props.acceptHandler } cta>OK</StyledButton>
      </StyledModalFooter>
    </>
  );
};

export default Modal;
