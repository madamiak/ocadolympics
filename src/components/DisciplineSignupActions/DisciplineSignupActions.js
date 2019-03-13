import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledButton = styled(Button)`
  margin: 1rem 0.2rem;
  width: calc(100% - 0.4rem);
`;

const DisciplineSignupActions = props => {
  return (
    <div>
      <hr/>
      <StyledButton
        disabled={ props.disabled }
        onClick={ props.acceptHandler }
        cta
      >Sign up</StyledButton>
    </div>
  );
};

export default DisciplineSignupActions;
