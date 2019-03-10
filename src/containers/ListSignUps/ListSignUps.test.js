import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { default as ConnectedListSignUps, ListSignUps } from './ListSignUps';
import SignUps from '../../components/SignUps/SignUps';
import { mockStore } from '../../utils/test/testUtils';
import { Provider } from 'react-redux';

describe('<ListSignUps/>', () => {
  it('renders without crashing', () => {
    render(<ListSignUps/>)
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
      }
    });

    const wrapper = mount(
      <Provider store={ store }>
        <ConnectedListSignUps/>
      </Provider>
    );

    const props = wrapper.find(ListSignUps).props();
    expect(props.disciplines.length).toBe(4);
    expect(props.signUps.user.length).toBe(2);
  });

  it('displays sign ups', () => {
    const wrapper = shallow(<ListSignUps/>);

    expect(wrapper.find(SignUps).exists()).toBeTruthy();
  });
});