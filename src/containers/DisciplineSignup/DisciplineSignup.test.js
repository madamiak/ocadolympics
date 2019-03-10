import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { default as ConnectedDisciplineSignup, DisciplineSignup } from './DisciplineSignup';
import { mockStore } from '../../utils/test/testUtils';
import { Provider } from 'react-redux';

describe('<DisciplineSignup/>', () => {
  const getDisciplines = () => [
    { id: 'foosball', name: 'Foosball', checked: false },
    { id: 'darts', name: 'Darts', checked: false },
    { id: 'pull-ups', name: 'Pull ups', checked: false },
    { id: 'tekken', name: 'Tekken', checked: false }
  ];

  it('renders without crashing', () => {
    render(<DisciplineSignup disciplines={ getDisciplines() }/>);
  });

  it('connects to redux', () => {
    const disciplines = getDisciplines();
    const signUps = ['darts', 'tekken'];
    const store = mockStore({
      disciplines: disciplines,
      signUps: {
        user: signUps
      },
      submitted: false
    });

    const wrapper = mount(
      <Provider store={ store }>
        <ConnectedDisciplineSignup/>
      </Provider>
    );

    const props = wrapper.find(DisciplineSignup).props();
    expect(props.disciplines.length).toEqual(disciplines.length);
    expect(props.signUps).toBeTruthy();
    expect(props.signUps.user.length).toEqual(signUps.length);
    expect(props.submitted).toBeFalsy();
    expect(props.signUpForDisciplines).toBeTruthy();
    expect(props.fetchSignUps).toBeTruthy();
  });

  it('chooses correct discipline', () => {
    const wrapper = shallow(<DisciplineSignup disciplines={ getDisciplines() } fetchSignUps={ jest.fn() }/>);

    wrapper.instance().selectionChange({ target: { id: 'darts' } });

    expect(wrapper.state().disciplines[1].checked).toBeTruthy();
  });

  it('shows confirmation dialog when signing up for selected disciplines', () => {
    const wrapper = shallow(<DisciplineSignup disciplines={ getDisciplines() } fetchSignUps={ jest.fn() }/>);
    expect(wrapper.state().showConfirmation).toBeFalsy();

    wrapper.instance().selectionSubmit();

    expect(wrapper.state().showConfirmation).toBeTruthy();
  });

  it('fires sign up for getDisciplines when signing up for selected disciplines', () => {
    const func = jest.fn();
    const wrapper = shallow(
      <DisciplineSignup disciplines={ getDisciplines() } signUpForDisciplines={ func } fetchSignUps={ jest.fn() }/>
    );

    wrapper.instance().selectionChange({ target: { id: 'darts' } });
    wrapper.instance().selectionChange({ target: { id: 'tekken' } });
    wrapper.instance().selectionAccept();

    expect(func).toHaveBeenCalled();
    expect(func.mock.calls[0][0]).toEqual(['darts', 'tekken']);
  });

  it('hides confirmation dialog after signing up for selected disciplines', () => {
    const wrapper = shallow(<DisciplineSignup disciplines={ getDisciplines() } fetchSignUps={ jest.fn() }/>);

    wrapper.instance().selectionAccept();

    expect(wrapper.state().showConfirmation).toBeFalsy();
  });

});


