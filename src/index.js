import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import configureStore from './store/configureStore';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import Info from './playground/hoc';
import AdminInfo from './playground/hoc';
import AuthInfo from './playground/hoc';

const store = configureStore();

store.dispatch(addExpense({description:'Water bill', amount: 4500, createdAt: 45100}));
store.dispatch(addExpense({description:'Gas bill', amount: 800, createdAt: 3000}));
store.dispatch(addExpense({description:'Rent', amount: 109500, createdAt: -1000}));

const state= store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


