import React from 'react';
import ReactDOM from 'react-dom';

// import all global style sheets here
import './styles/index.scss';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer from './Users/store/UserReducer';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    user: UserReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
