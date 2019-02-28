import React from 'react';

const ConfirmationDialog = (props) => {
    return (
        <div className='dialog'>
            <button className='accept' onClick={ props.acceptHandler }>Confirm</button>
        </div>
    );
};

export default ConfirmationDialog;