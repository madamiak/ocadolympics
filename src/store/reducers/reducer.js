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
        default:
            return state
    }
}