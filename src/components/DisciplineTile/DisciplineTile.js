import React from 'react';

const DisciplineTile = (props) => {
    return (
        <div className='discipline'>
            <input type="checkbox" checked={ props.checked } id={ props.id } onChange={ props.selectionChange }/>
            <label>{ props.name }</label>
        </div>
    );
};

export default DisciplineTile;