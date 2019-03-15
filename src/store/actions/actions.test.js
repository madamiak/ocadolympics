import UUID from 'uuid';
import * as actions from './actions';
import { getAction, mockStore } from '../../utils/test/testUtils';

describe('actions', () => {
  const store = mockStore();

  it('fetches sign ups', async () => {
    const signUps = { user: ['signUp1', 'signUp2'] };
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        json: () => signUps
      }));

    store.dispatch(actions.fetchSignUps());

    expect(await getAction(store, 'SIGN_UPS_FETCHED'))
      .toEqual({ type: 'SIGN_UPS_FETCHED', payload: signUps });
  });

  it('signs up for disciplines', async () => {
    const disciplines = ['signUp1', 'signUp2'];
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        json: () => disciplines
      }));

    store.dispatch(actions.signUpForDisciplines());

    expect(await getAction(store, 'USER_SIGNED_UP'))
      .toEqual({ type: 'USER_SIGNED_UP', payload: disciplines });
  });

  it('adds toast', async () => {
    jest.spyOn(UUID, 'v4').mockReturnValue('123');

    store.dispatch(actions.addToast('some component'));

    expect(await getAction(store, 'ADD_TOAST')).toEqual(
      { type: 'ADD_TOAST', payload: { id: '123', content: 'some component' } }
    );
  });

  it('removes toast', async () => {
    store.dispatch(actions.removeToast('123'));

    expect(await getAction(store, 'REMOVE_TOAST')).toEqual(
      { type: 'REMOVE_TOAST', payload: '123' }
    );
  });
});
