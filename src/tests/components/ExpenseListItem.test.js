import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import expenses from '../fixtures/expenses';

Enzyme.configure({ adapter: new Adapter()});

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});