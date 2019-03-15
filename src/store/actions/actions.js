import UUID from 'uuid';
import { addSignUp, getSignUps } from '../../containers/signUpsFirebaseRepository';

export const fetchSignUps = () => dispatch => {
  getSignUps()
    .then(it => dispatch({ type: 'SIGN_UPS_FETCHED', payload: it }));
};

export const signUpForDisciplines = userWithDisciplines => dispatch => {
  addSignUp(userWithDisciplines)
    .then(it => dispatch({ type: 'USER_SIGNED_UP', payload: it }))
    .then(() => fetchSignUps());
};

export const addToast = component => {
  return {
    type: 'ADD_TOAST',
    payload: {
      id: UUID.v4(),
      content: component
    }
  };
};

export const removeToast = id => {
  return {
    type: 'REMOVE_TOAST',
    payload: id
  };
};
