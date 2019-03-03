import React from 'react';
import DisciplineTile from '../DisciplineTile/DisciplineTile';

const DisciplineTiles = (props) => {
    if (!props.show) {
        return null;
    }
    return props.disciplines.map(it => (
        <DisciplineTile
            key={ it.id }
            id={ it.id }
            checked={ it.checked }
            name={ it.name }
            selectionChange={ props.selectionChange }
        />
    ));
};

export default DisciplineTiles;
