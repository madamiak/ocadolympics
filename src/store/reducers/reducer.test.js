import { default as reducer } from './reducer';
import { SIGN_UP_FOR_DISCIPLINES } from '../actions/actions';

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

    it('signs up a user for selected disciplines', () => {
        const action = {
            type: SIGN_UP_FOR_DISCIPLINES,
            payload: ['darts', 'foosball']
        };

        const newStoreState = reducer({ signUps: {} }, action);

        expect(newStoreState).toEqual({
            signUps: {
                user: ['darts', 'foosball']
            }
        })
    });
});
