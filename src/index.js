import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import menuReducer from "./store/reducers/menu";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

axios.defaults.baseURL = 'https://restaraunt-menu.firebaseio.com/';

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
