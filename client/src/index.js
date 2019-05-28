import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import UserReducer from './store/reducers/user';
import AccountReducer from './store/reducers/account';
import ContactReducer from './store/reducers/contact';
import TransactionReducer from './store/reducers/transaction';


const rootReducer = combineReducers({
    user: UserReducer,
    account: AccountReducer,
    contact: ContactReducer,
    transaction: TransactionReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();
