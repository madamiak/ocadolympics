import React from 'react';
import Button from '../Button/Button';

const ConfirmationDialog = (props) => {
  return <Button className='accept' onClick={ props.acceptHandler } hidden={ !props.show }>Confirm</Button>;
};

export default ConfirmationDialog;