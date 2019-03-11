import { render, shallow } from 'enzyme/build';
import React from 'react';
import SignUps from './SignUps';
import SignUp from '../SignUp/SignUp';

describe('<SignUps/>', () => {
  it('renders without crashing', () => {
    render(<SignUps/>);
  });

  it('displays current sign ups', () => {
    const disciplines = [
      { id: 'foosball', name: 'Foosball' },
      { id: 'darts', name: 'Darts' },
      { id: 'pull-ups', name: 'Pull ups' },
      { id: 'tekken', name: 'Tekken' }
    ];
    const signUps = { user: ['darts', 'tekken'] };

    const wrapper = shallow(
      <SignUps disciplines={ disciplines } signUps={ signUps }/>
    );

    const signUpComponents = wrapper.find(SignUp);
    expect(signUpComponents.length).toBe(signUps.user.length);
  });
});