import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SSLCommerzSuccess from "./SSLCommerzSuccess";
import React from "react";
configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
describe('SSLCommerz Testing', () => {
    it('Payment Success ', () => {
        const wrapper = shallow(<SSLCommerzSuccess />)
        // console.log(wrapper.debug());
        expect(wrapper.exists('.text-center')).toEqual(true)
    });
});