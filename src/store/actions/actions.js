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
