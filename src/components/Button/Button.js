import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
`;

const Button = (props) => {
  return (
    <StyledButton { ...props }>{ props.children }</StyledButton>
  )
};

export default Button;