import React from 'react';

const ConfirmationDialog = (props) => {
    if(!props.show) {
        return null;
    }
    return (
        <div className='dialog'>
            <button className='accept' onClick={ props.acceptHandler }>Confirm</button>
        </div>
    );
};

export default ConfirmationDialog;