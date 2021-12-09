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
import './firebase/firebase.js';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


