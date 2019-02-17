import React from 'react';

const confirmationDialog = (props) => {
    return (
        <div className='dialog'>
            <button className='accept' onClick={props.acceptHandler}>Confirm</button>
        </div>
    );
}

export default confirmationDialog;