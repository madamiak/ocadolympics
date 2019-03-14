import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledDisciplineSignupActions = styled.footer`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin: 1rem 2.5%;
  width: 95%;
`;

const DisciplineSignupActions = props => {
  return (
    <StyledDisciplineSignupActions>
      <hr/>
      <StyledButton
        disabled={ props.disabled }
        onClick={ props.acceptHandler }
        cta
      >Sign up</StyledButton>
    </StyledDisciplineSignupActions>
  );
};

export default DisciplineSignupActions;
