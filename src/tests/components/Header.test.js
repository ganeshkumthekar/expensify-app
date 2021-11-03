import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from '../../components/Header';

Enzyme.configure({ adapter: new Adapter()});

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
