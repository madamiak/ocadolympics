import React from 'react';
import styled from 'styled-components';
import SignUp from '../SignUp/SignUp';

const StyledSignUps = styled.div`
  border-radius: 0.5rem;
  background-color: #EEE;
  padding: 0.5rem;
  margin: 0.2rem;
`;

const Header = styled.div`
  margin: 0.5rem;
`;

const SignUps = props => {
  const signUps = [];
  Object.keys(props.signUps || {}).forEach(user => {
    signUps.push(
      <StyledSignUps key={ user }>
        <Header>{ `${user}'s sign ups:` }</Header>
        { props.signUps[user].map(it => (
          <SignUp key={ it } name={ props.disciplines.filter(d => d.id === it)[0].name }/>
        )) }
      </StyledSignUps>
    );
  });
  return signUps;
};

export default SignUps;
