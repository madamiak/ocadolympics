import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiscipline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 2rem;
    cursor: pointer;
    
    &:hover {
      font-weight: 700;
    }
    
    ${ props => props.checked && css`
        background: #AAA;
        color: white;
    ` }
`;

const DisciplineTile = props => {
  return (
    <StyledDiscipline id={ props.id } checked={ props.checked } onClick={ props.selectionChange }>
      { props.name }
    </StyledDiscipline>
  );
};

export default DisciplineTile;
