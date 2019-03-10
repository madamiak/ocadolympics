import React from 'react';
import styled, { css } from 'styled-components'

const StyledDiscipline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    
    ${ props => props.checked && css`
        background: #777;
        color: white;
    ` }
`;

const DisciplineTile = (props) => {
  return (
    <StyledDiscipline id={ props.id } checked={ props.checked } onClick={ props.selectionChange }>
      { props.name }
    </StyledDiscipline>
  );
};

export default DisciplineTile;