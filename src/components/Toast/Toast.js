import React from 'react';
import styled from 'styled-components';

const StyledToast = styled.li`
  position: fixed;
  bottom: 0.5rem;
  width: 95%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #777;
  border-radius: 0.2rem;
`;

const Toast = (props) => {
  return (
    <StyledToast>
      { props.children }
      <span onClick={ props.dismissHandler }>x</span>
    </StyledToast>
  );
};

export default Toast;
