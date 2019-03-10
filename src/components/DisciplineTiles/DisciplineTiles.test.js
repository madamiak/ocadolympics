import React from 'react';
import { render, shallow } from 'enzyme/build';
import DisciplineTiles from './DisciplineTiles';
import DisciplineTile from '../DisciplineTile/DisciplineTile';

describe('<DisciplineTiles/>', () => {
  it('renders without crashing', () => {
    render(<DisciplineTiles disciplines={ [] }/>);
  });

  it('displays nothing when show is false', () => {
    const disciplines = [
      { id: 'foosball', name: 'Foosball' },
      { id: 'darts', name: 'Darts' },
      { id: 'pull-ups', name: 'Pull ups' },
      { id: 'tekken', name: 'Tekken' }
    ];

    const wrapper = shallow(<DisciplineTiles show={false} disciplines={ disciplines }/>);

    const disciplineComponents = wrapper.find(DisciplineTile);
    expect(disciplineComponents.exists()).toBeFalsy();
  });

  it('displays disciplines when show is true', () => {
    const disciplines = [
      { id: 'foosball', name: 'Foosball' },
      { id: 'darts', name: 'Darts' },
      { id: 'pull-ups', name: 'Pull ups' },
      { id: 'tekken', name: 'Tekken' }
    ];

    const wrapper = shallow(<DisciplineTiles show={true} disciplines={ disciplines }/>);

    const disciplineComponents = wrapper.find(DisciplineTile);
    expect(disciplineComponents.length).toBe(disciplines.length);
  });
});