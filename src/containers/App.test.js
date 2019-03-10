import React from 'react';
import { mount, shallow } from 'enzyme';
import { App, default as ConnectedApp } from './App';
import { default as ConnectedDisciplineSignup } from './DisciplineSignup/DisciplineSignup';
import { default as ConnectedListSignUps } from './ListSignUps/ListSignUps';
import { mockStore } from '../utils/test/testUtils';
import { Provider } from 'react-redux';

describe('<App/>', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  });

  it('connects to redux', () => {
    const store = mockStore({
      disciplines: [
        { id: 'foosball', name: 'Foosball' },
        { id: 'darts', name: 'Darts' },
        { id: 'pull-ups', name: 'Pull ups' },
        { id: 'tekken', name: 'Tekken' }
      ],
      signUps: {
        user: ['darts', 'tekken']
      },
      submitted: true
    });

    const wrapper = mount(
      <Provider store={ store }>
        <ConnectedApp/>
      </Provider>
    );

    expect(wrapper.find(App).props().submitted).toBeTruthy();
  });

  it('displays discipline sign up view when not submitted', () => {
    const wrapper = shallow(<App submitted={ false }/>);

    expect(wrapper.find(ConnectedDisciplineSignup).exists()).toBeTruthy();
    expect(wrapper.find(ConnectedListSignUps).exists()).toBeFalsy();
  });

  it('displays sign ups list view when submitted', () => {
    const wrapper = shallow(<App submitted={ true }/>);

    expect(wrapper.find(ConnectedDisciplineSignup).exists()).toBeFalsy();
    expect(wrapper.find(ConnectedListSignUps).exists()).toBeTruthy();
  });

});
