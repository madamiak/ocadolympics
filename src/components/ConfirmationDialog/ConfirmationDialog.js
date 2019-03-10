import React from 'react';
import Button from '../Button/Button';

const ConfirmationDialog = (props) => {
    if(!props.show) {
        return null;
    }
    return (
        <>
            <Button className='accept' onClick={ props.acceptHandler }>Confirm</Button>
        </>
    );
};

export default ConfirmationDialog;