import React from 'react';
import styled from 'styled-components';

const StyledDisciplineSignupLayout = styled.article`
  height: 100%;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DisciplineSignupLayout = props => {
  return <StyledDisciplineSignupLayout>{ props.children }</StyledDisciplineSignupLayout>;
};

export default DisciplineSignupLayout;