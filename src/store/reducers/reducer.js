import { SIGN_UP_FOR_DISCIPLINES } from '../actions/actions';

const initialState = {
    disciplines: [
        { id: 'foosball', name: 'Foosball' },
        { id: 'darts', name: 'Darts' },
        { id: 'pull-ups', name: 'Pull ups' },
        { id: 'tekken', name: 'Tekken' }
    ],
    signUps: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_FOR_DISCIPLINES:
            const newSignUps = { ...state.signUps };
            newSignUps['user'] = action.payload;
            return { ...state, signUps: newSignUps };
        default:
            return state
    }
}