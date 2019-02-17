import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('<App/>', () => {

    it('renders without crashing', () => {
        const wrapper = render(<App/>);
    });

    it('displays disciplines', () => {
        const disciplines = [
            {
                id: 'foosball',
                name: 'Foosball'
            },
            {
                id: 'darts',
                name: 'Darts'
            }
        ]
        const wrapper = shallow(<App disciplines={disciplines}/>);
        const disciplineComponents = wrapper.find('div.discipline');
        expect(disciplineComponents.getElements().length).toBe(2);
    });

    it('chooses correct discipline', () => {
        const disciplines = [
            {
                id: 'darts',
                name: 'Darts'
            }
        ]
        const wrapper = shallow(<App disciplines={disciplines}/>);
        const dartsComponent = wrapper.find('input#darts');
        expect(dartsComponent.getElement()).toBeTruthy();

        dartsComponent.prop('onChange')({target: { id: 'darts', checked: true }})
        wrapper.update();

        const disciplinesState = wrapper.state().disciplines;
        const dartsDiscipline = disciplinesState.filter(it => it.id === 'darts')[0];
        expect(dartsDiscipline.checked).toBeTruthy();
    });

    it('signs up for selected disciplines', () => {
        const disciplines = [
            {
                id: 'foosball',
                name: 'Foosball'
            },
            {
                id: 'darts',
                name: 'Darts'
            },
            {
                id: 'pull-ups',
                name: 'Pull ups'
            },
            {
                id: 'tekken',
                name: 'Tekken'
            }
        ]
        const wrapper = shallow(<App disciplines={disciplines}/>);

        wrapper.find('input#darts').prop('onChange')({target: { id: 'darts', checked: true }})
        wrapper.find('input#tekken').prop('onChange')({target: { id: 'tekken', checked: true }})
        wrapper.find('button').prop('onClick')();
        wrapper.update();

        const successMessage = wrapper.find('.success');
        expect(successMessage.getElement()).toBeTruthy();
    });

});


