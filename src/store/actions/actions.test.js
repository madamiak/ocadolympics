import * as actions from './actions';
import { getAction, mockStore } from '../../utils/test/testUtils';

describe('actions', () => {
    it('fetches sign ups', async () => {
        const signUps = { user: ['signUp1', 'signUp2'] };
        const store = mockStore();
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
        const store = mockStore();
        jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => disciplines
            }));

        store.dispatch(actions.signUpForDisciplines());

        expect(await getAction(store, 'USER_SIGNED_UP'))
            .toEqual({ type: 'USER_SIGNED_UP', payload: disciplines });
    });
});
