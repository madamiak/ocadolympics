import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  margin: 1rem;
  
  ${ props => props.cta ?
    css`
      background-color: #AAA;
      color: #333;
    ` : null 
  };
`;

const Button = props => {
  return (
    <StyledButton { ...props }>{ props.children }</StyledButton>
  )
};

export default Button;