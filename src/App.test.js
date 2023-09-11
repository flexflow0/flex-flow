import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import App from "./App";
describe('App Testing', () => {
    it('App Success ', () => {
        const wrapper = shallow(<App></App>)
        console.log(wrapper.debug());
    });
});