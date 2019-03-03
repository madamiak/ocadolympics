import React from 'react';

const SuccessDialog = (props) => {
    if(!props.show) {
        return null;
    }
    return (
        <p className='success'>You have successfully signed up for selected disciplines</p>
    );
};

export default SuccessDialog;