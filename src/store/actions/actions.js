export const SIGN_UP_FOR_DISCIPLINES = 'SIGN_UP_FOR_DISCIPLINES';

export const signUpForDisciplines = disciplines => {
    return {
        type: SIGN_UP_FOR_DISCIPLINES,
        payload: disciplines
    };
};
