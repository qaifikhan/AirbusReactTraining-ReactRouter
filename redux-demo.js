let redux = require('redux');

let initialState = {
    totalLikes: 0,
    totalDislikes: 0
}

//Reducer
let mainReducer = (state = initialState, action) => {
    console.log(action.type);
    if(action.type === 'INCREMENT_LIKE') {
        return { ...state, totalLikes: state.totalLikes + 1}
    }
    if(action.type === 'DECREMENT_LIKE') {
        return { ...state, totalLikes: state.totalLikes - 1}
    }
    if(action.type === 'INCREMENT_BY_FIFTY') {
        return { ...state, totalLikes: state.totalLikes + action.incVal}
    }
    return state;
}

//Global State
let globalStore = redux.createStore(mainReducer);


//Subscribe
globalStore.subscribe(() => {
    console.log('Subscribed Value => ', globalStore.getState())
})

// Action Dispatch
globalStore.dispatch({type: 'INCREMENT_LIKE'})
globalStore.dispatch({type: 'DECREMENT_LIKE'});
globalStore.dispatch({type: 'INCREMENT_BY_FIFTY', incVal: 29});