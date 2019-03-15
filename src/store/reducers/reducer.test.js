import { default as reducer } from './reducer';

describe('reducer', () => {
  it('sets initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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

  it(`sets user's sign ups`, () => {
    const initialState = {
      disciplines: [],
      signUps: {
        user1: ['signUp1']
      },
      submitted: false
    };
    const signUps = { user2: ['signUp1', 'signUp2'] };
    expect(reducer(initialState, { type: 'USER_SIGNED_UP', payload: signUps })).toEqual({
      disciplines: [],
      signUps: {
        user1: ['signUp1'],
        user2: ['signUp1', 'signUp2']
      },
      submitted: true
    })
  });

  it('adds toast', () => {
    const initialState = {
      toasts: [{ id: '1', content: 'some toast' }]
    };
    expect(reducer(initialState, { type: 'ADD_TOAST', payload: { id: '2', content: 'new toast' } })).toEqual({
      toasts: [
        { id: '2', content: 'new toast' },
        { id: '1', content: 'some toast' }
      ]
    });
  });

  it('removes toast', () => {
    const initialState = {
      toasts: [
        { id: '1', content: 'some toast' },
        { id: '2', content: 'another toast' }
      ]
    };
    expect(reducer(initialState, { type: 'REMOVE_TOAST', payload: '2' })).toEqual({
      toasts: [{ id: '1', content: 'some toast' }]
    });
  });
});
