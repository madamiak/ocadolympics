import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import ConnectedApp, { App } from './App';
import ConnectedDisciplineSignup from './DisciplineSignup/DisciplineSignup';
import ConnectedListSignUps from './ListSignUps/ListSignUps';
import { mockStore } from '../utils/test/testUtils';

describe('<App/>', () => {
  const store = mockStore({
    signUps: {
      login: '',
      disciplines: []
    },
    toasts: []
  });

  it('renders without crashing', () => {
    shallow(<App/>);
  });

  it('displays discipline sign up view', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/'] }>
        <Provider store={ store }>
          <ConnectedApp/>
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(ConnectedDisciplineSignup).exists()).toBeTruthy();
    expect(wrapper.find(ConnectedListSignUps).exists()).toBeFalsy();
  });

  it('displays sign ups list view', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/signups'] }>
        <Provider store={ store }>
          <ConnectedApp/>
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(ConnectedDisciplineSignup).exists()).toBeFalsy();
    expect(wrapper.find(ConnectedListSignUps).exists()).toBeTruthy();
  });

});
