import React from 'react';
import styled from 'styled-components';
import DisciplineTile from '../DisciplineTile/DisciplineTile';

const StyledDiscliplineTiles = styled.section`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
`;

const DisciplineTiles = (props) => {
  return (
    <StyledDiscliplineTiles>
      { props.disciplines.map(it => (
        <DisciplineTile
          key={ it.id }
          id={ it.id }
          checked={ it.checked }
          name={ it.name }
          selectionChange={ props.selectionChange }
        />))
      }
    </StyledDiscliplineTiles>
  );
};

export default DisciplineTiles;
