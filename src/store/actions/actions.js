import { addSignUp, getSignUps } from '../../containers/signUpsFirebaseRepository';

export const fetchSignUps = () => dispatch => {
    getSignUps()
        .then(it => dispatch({ type: 'SIGN_UPS_FETCHED', payload: it }));
};

export const signUpForDisciplines = disciplines => dispatch => {
    addSignUp('user', disciplines)
        .then(it => dispatch({ type: 'USER_SIGNED_UP', payload: it }))
        .then(() => fetchSignUps());
};
