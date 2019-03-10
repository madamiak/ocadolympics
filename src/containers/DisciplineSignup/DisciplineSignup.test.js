import React from 'react';
import { render, shallow } from 'enzyme';
import { DisciplineSignup } from './DisciplineSignup';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import DisciplineTile from '../../components/DisciplineTile/DisciplineTile';
import SuccessDialog from '../../components/SuccessDialog/SuccessDialog';
import DisciplineTiles from '../../components/DisciplineTiles/DisciplineTiles';

describe('<DisciplineSignup/>', () => {

  it('renders without crashing', () => {
    render(<DisciplineSignup disciplines={ [] }/>);
  });

  it('chooses correct discipline', () => {
    const disciplines = [
      { id: 'darts', name: 'Darts' }
    ];
    const wrapper = shallow(<DisciplineSignup disciplines={ disciplines } fetchSignUps={ jest.fn() }/>);
    const dartsComponent = wrapper.find(DisciplineTiles).dive().find(DisciplineTile).dive().find('#darts');
    expect(dartsComponent.getElement()).toBeTruthy();

    dartsComponent.prop('onClick')({ target: { id: 'darts' } });
    wrapper.update();

    const disciplinesState = wrapper.state().disciplines;
    const dartsDiscipline = disciplinesState.filter(it => it.id === 'darts')[0];
    expect(dartsDiscipline.checked).toBeTruthy();
  });

  it('shows confirmation dialog when signing up for selected disciplines', () => {
    const disciplines = [
      { id: 'foosball', name: 'Foosball' },
      { id: 'darts', name: 'Darts' },
      { id: 'pull-ups', name: 'Pull ups' },
      { id: 'tekken', name: 'Tekken' }
    ];
    const wrapper = shallow(<DisciplineSignup disciplines={ disciplines } fetchSignUps={ jest.fn() }/>);
    expect(wrapper.find(ConfirmationDialog).prop('show')).toBeFalsy();

    wrapper.find(DisciplineTiles).dive().find({ id: 'darts' })
      .prop('selectionChange')({ target: { id: 'darts', checked: true } });
    wrapper.find(DisciplineTiles).dive().find({ id: 'tekken' })
      .prop('selectionChange')({ target: { id: 'tekken', checked: true } });
    wrapper.find('button').prop('onClick')();
    wrapper.update();

    expect(wrapper.find(ConfirmationDialog).exists()).toBeTruthy();
  });

  it('fires sign up for disciplines when signing up for selected disciplines', () => {
    const disciplines = [
      { id: 'foosball', name: 'Foosball' },
      { id: 'darts', name: 'Darts' },
      { id: 'pull-ups', name: 'Pull ups' },
      { id: 'tekken', name: 'Tekken' }
    ];
    const func = jest.fn();
    const wrapper = shallow(
      <DisciplineSignup disciplines={ disciplines } signUpForDisciplines={ func } fetchSignUps={ jest.fn() }/>
    );

    wrapper.find(DisciplineTiles).dive().find({ id: 'darts' })
      .prop('selectionChange')({ target: { id: 'darts', checked: true } });
    wrapper.find(DisciplineTiles).dive().find({ id: 'tekken' })
      .prop('selectionChange')({ target: { id: 'tekken', checked: true } });
    wrapper.find('button').prop('onClick')();
    wrapper.update();

    wrapper.find(ConfirmationDialog).dive().find('button.accept').prop('onClick')();
    wrapper.update();

    expect(func).toHaveBeenCalled();
    expect(func.mock.calls[0][0]).toEqual(['darts', 'tekken']);
  });

  it('shows confirmation message after signing up for selected disciplines', () => {
    const disciplines = [
      { id: 'foosball', name: 'Foosball' },
      { id: 'darts', name: 'Darts' },
      { id: 'pull-ups', name: 'Pull ups' },
      { id: 'tekken', name: 'Tekken' }
    ];
    const wrapper = shallow(<DisciplineSignup disciplines={ disciplines } fetchSignUps={ jest.fn() }/>);

    wrapper.find(DisciplineTiles).dive().find({ id: 'darts' })
      .prop('selectionChange')({ target: { id: 'darts', checked: true } });
    wrapper.find(DisciplineTiles).dive().find({ id: 'tekken' })
      .prop('selectionChange')({ target: { id: 'tekken', checked: true } });
    wrapper.find('button').prop('onClick')();
    wrapper.update();

    wrapper.find(ConfirmationDialog).dive().find('button.accept').prop('onClick')();
    wrapper.update();

    expect(wrapper.find(SuccessDialog).exists()).toBeTruthy();
  });

});


