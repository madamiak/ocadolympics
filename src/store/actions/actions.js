import { addSignUp } from '../../containers/signUpsRepository';

export const signUpForDisciplines = disciplines => dispatch => {
    addSignUp('user', disciplines).then(
        dispatch({type: 'TBD'})
    );
};
