import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('<App/>', () => {

    it('renders without crashing', () => {
        const wrapper = render(<App/>);
    });

});


