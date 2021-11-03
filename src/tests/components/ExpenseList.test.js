import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import expenses from '../fixtures/expenses';

Enzyme.configure({ adapter: new Adapter()});

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});