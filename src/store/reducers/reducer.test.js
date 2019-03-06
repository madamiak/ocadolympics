import { default as reducer } from './reducer';

describe('reducer', () => {
    it('sets initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            disciplines: [
                { id: 'foosball', name: 'Foosball' },
                { id: 'darts', name: 'Darts' },
                { id: 'pull-ups', name: 'Pull ups' },
                { id: 'tekken', name: 'Tekken' }
            ],
            signUps: {}
        })
    });

    it('sets fetched sign ups', () => {
        const signUps = { user: ['signUp1', 'signUp2'] };
        expect(reducer(undefined, { type: 'SIGN_UPS_FETCHED', payload: signUps })).toEqual({
            disciplines: [
                { id: 'foosball', name: 'Foosball' },
                { id: 'darts', name: 'Darts' },
                { id: 'pull-ups', name: 'Pull ups' },
                { id: 'tekken', name: 'Tekken' }
            ],
            signUps: signUps
        })
    });

    it('sets user\'s sign ups', () => {
        const disciplines = ['signUp1', 'signUp2'];
        expect(reducer(undefined, { type: 'USER_SIGNED_UP', payload: disciplines })).toEqual({
            disciplines: [
                { id: 'foosball', name: 'Foosball' },
                { id: 'darts', name: 'Darts' },
                { id: 'pull-ups', name: 'Pull ups' },
                { id: 'tekken', name: 'Tekken' }
            ],
            signUps: {
                user: disciplines
            }
        })
    });
});
