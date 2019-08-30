import { ACTION_INCREMENT_LIKE, ACTION_DECREMENT_LIKE, ACTION_INCREMENT_BY_VALUE, ACTION_DECREMENT_BY_VALUE } from "../Utilities/ReducerActions";

let initialState = {
    totalLikes: 0,
}

let LikesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_INCREMENT_LIKE :
            return {...state, totalLikes: state.totalLikes + 1}
        case ACTION_DECREMENT_LIKE :
            return {...state, totalLikes: state.totalLikes - 1}
        case ACTION_INCREMENT_BY_VALUE :
            return {...state, totalLikes: state.totalLikes + action.incBy}
        case ACTION_DECREMENT_BY_VALUE :
            return {...state, totalLikes: state.totalLikes - action.decBy}
        default:
            return {...state}
    }
}

export default LikesReducer;