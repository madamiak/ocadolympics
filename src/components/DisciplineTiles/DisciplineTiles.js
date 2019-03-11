import React from 'react';
import styled from 'styled-components';
import DisciplineTile from '../DisciplineTile/DisciplineTile';

const StyledDisciplineTiles = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
`;

const DisciplineTiles = props => {
  return (
    <StyledDisciplineTiles>
      { props.disciplines.map(it => (
        <DisciplineTile
          key={ it.id }
          id={ it.id }
          checked={ it.checked }
          name={ it.name }
          selectionChange={ props.selectionChange }
        />))
      }
    </StyledDisciplineTiles>
  );
};

export default DisciplineTiles;
