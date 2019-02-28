import * as actions from './actions';

describe('actions', () => {
    it('creates sign up for disciplines action', () => {
        const disciplines = ['darts', 'foosball'];
        const expectedAction = {
            type: 'SIGN_UP_FOR_DISCIPLINES',
            payload: disciplines
        };

        const actualAction = actions.signUpForDisciplines(disciplines);

        expect(actualAction).toEqual(expectedAction);
    });
});
