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
        const initialState = {
            disciplines: [],
            signUps: {}
        };
        const signUps = { user: ['signUp1', 'signUp2'] };
        expect(reducer(initialState, { type: 'SIGN_UPS_FETCHED', payload: signUps })).toEqual({
            disciplines: [],
            signUps: signUps
        })
    });

    it('sets user\'s sign ups', () => {
        const initialState = {
            disciplines: [],
            signUps: {
                user1: ['signUp1']
            }
        };
        const signUps = { user2: ['signUp1', 'signUp2'] };
        expect(reducer(initialState, { type: 'USER_SIGNED_UP', payload: signUps })).toEqual({
            disciplines: [],
            signUps: {
                user1: ['signUp1'],
                user2: ['signUp1', 'signUp2']
            }
        })
    });
});
