import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import MainReducer from './Reducers/DislikeReducer';
import {Provider} from 'react-redux';
import LikesReducer from './Reducers/LikesReducer';
import DislikeReducer from './Reducers/DislikeReducer';

let rootReducer = combineReducers({
    likes: LikesReducer,
    dislike: DislikeReducer
})

let globalStore = createStore(rootReducer);
console.log(globalStore.getState());

ReactDOM.render(<Provider store={globalStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
