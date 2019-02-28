import React from 'react';
import { default as ConnectedDisciplineSignup, DisciplineSignup } from './DisciplineSignup';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import { mount, render, shallow } from 'enzyme';
import { Provider } from "react-redux";
import { mockStore } from "../../utils/test/testUtils";

describe('<DisciplineSignup/>', () => {

    it('renders without crashing', () => {
        render(<DisciplineSignup disciplines={[]}/>);
    });

    it('chooses correct discipline', () => {
        const disciplines = [
            {id: 'darts', name: 'Darts'}
        ];
        const wrapper = shallow(<DisciplineSignup disciplines={disciplines}/>);
        const dartsComponent = wrapper.find('input#darts');
        expect(dartsComponent.getElement()).toBeTruthy();

        dartsComponent.prop('onChange')({target: {id: 'darts', checked: true}});
        wrapper.update();

        const disciplinesState = wrapper.state().disciplines;
        const dartsDiscipline = disciplinesState.filter(it => it.id === 'darts')[0];
        expect(dartsDiscipline.checked).toBeTruthy();
    });

    it('shows confirmation dialog when signing up for selected disciplines', () => {
        const disciplines = [
            {id: 'foosball', name: 'Foosball'},
            {id: 'darts', name: 'Darts'},
            {id: 'pull-ups', name: 'Pull ups'},
            {id: 'tekken', name: 'Tekken'}
        ];
        const wrapper = shallow(<DisciplineSignup disciplines={disciplines}/>);
        expect(wrapper.find(ConfirmationDialog).exists()).toBeFalsy();

        wrapper.find('input#darts').prop('onChange')({target: {id: 'darts', checked: true}});
        wrapper.find('input#tekken').prop('onChange')({target: {id: 'tekken', checked: true}});
        wrapper.find('button').prop('onClick')();
        wrapper.update();

        expect(wrapper.find(ConfirmationDialog).exists()).toBeTruthy();
    });

    it('shows confirmation message after signing up for selected disciplines', () => {
        const disciplines = [
            {id: 'foosball', name: 'Foosball'},
            {id: 'darts', name: 'Darts'},
            {id: 'pull-ups', name: 'Pull ups'},
            {id: 'tekken', name: 'Tekken'}
        ];
        const wrapper = shallow(<DisciplineSignup disciplines={disciplines}/>);

        wrapper.find('input#darts').prop('onChange')({target: {id: 'darts', checked: true}});
        wrapper.find('input#tekken').prop('onChange')({target: {id: 'tekken', checked: true}});
        wrapper.find('button').prop('onClick')();
        wrapper.update();

        wrapper.find(ConfirmationDialog).dive().find('button.accept').prop('onClick')();
        wrapper.update();

        expect(wrapper.find('.success').exists()).toBeTruthy();
    });

    describe('connect(<DisciplineSignup/>)', () => {
        it('displays disciplines', () => {
            const disciplines = [
                {id: 'foosball', name: 'Foosball'},
                {id: 'darts', name: 'Darts'},
                {id: 'pull-ups', name: 'Pull ups'},
                {id: 'tekken', name: 'Tekken'}
            ];

            const wrapper = mount(
                <Provider store={mockStore({disciplines: disciplines})}>
                    <ConnectedDisciplineSignup/>
                </Provider>
            );

            const disciplineComponents = wrapper.find('div.discipline');
            expect(disciplineComponents.length).toBe(disciplines.length);
        });
    });

});


