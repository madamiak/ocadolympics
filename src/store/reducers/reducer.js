import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
  router: connectRouter(history),
  signUps: signUpsReducer,
  toasts: toastsReducer
})

const initialSignUpsState = {
  login: 'user2',
  disciplines: [
    { id: 'foosball', name: 'Foosball' },
    { id: 'darts', name: 'Darts' },
    { id: 'pull-ups', name: 'Pull ups' },
    { id: 'tekken', name: 'Tekken' }
  ],
  signUps: {}
};

const signUpsReducer = (state = initialSignUpsState, action) => {
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
        signUps: newSignUps
      };
    default:
      return state
  }
}

const initialToastsState = []

const toastsReducer = (state = initialToastsState, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [action.payload, ...state];
    case 'REMOVE_TOAST':
      return state.filter(toast => toast.id !== action.payload);
    default:
      return state
  }
}
