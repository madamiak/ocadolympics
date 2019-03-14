const initialState = {
  login: 'user2',
  disciplines: [
    { id: 'foosball', name: 'Foosball' },
    { id: 'darts', name: 'Darts' },
    { id: 'pull-ups', name: 'Pull ups' },
    { id: 'tekken', name: 'Tekken' }
  ],
  signUps: {},
  submitted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UPS_FETCHED':
      return {
        ...state,
        signUps: action.payload
      };
    case 'USER_SIGNED_UP':
      const newSignUps = { ...state.signUps, ...action.payload };
      return {
        ...state,
        signUps: newSignUps,
        submitted: true
      };
    default:
      return state
  }
}
