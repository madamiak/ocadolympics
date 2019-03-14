import React from 'react';
import styled from 'styled-components';

const StyledSignUp = styled.span`
  display: inline-block;
  background-color: #777;
  color: white;
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.2rem;
`;

const SignUp = props => {
  return (
    <StyledSignUp>
      { props.name }
    </StyledSignUp>
  );
};

export default SignUp;
