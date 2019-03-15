const initialState = {
  login: 'user2',
  disciplines: [
    { id: 'foosball', name: 'Foosball' },
    { id: 'darts', name: 'Darts' },
    { id: 'pull-ups', name: 'Pull ups' },
    { id: 'tekken', name: 'Tekken' }
  ],
  signUps: {},
  submitted: false,
  toasts: []
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
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.payload, ...state.toasts]
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload)
      };
    default:
      return state
  }
}
