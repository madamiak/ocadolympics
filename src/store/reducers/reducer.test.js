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
});
