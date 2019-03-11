import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;
`;

const DisciplineSignupActions = props => {
  return (
    <div>
      <hr/>
      <StyledButton onClick={ props.acceptHandler } cta>Sign up</StyledButton>
    </div>
  );
};

export default DisciplineSignupActions;