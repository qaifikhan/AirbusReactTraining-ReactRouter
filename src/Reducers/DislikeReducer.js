import { ACTION_INCREMENT_DISLIKE, ACTION_DECREMENT_DISLIKE } from "../Utilities/ReducerActions";

let initialState = {
    totalDislikes: 0
}

let DislikeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_INCREMENT_DISLIKE :
            return {...state, totalDislikes: state.totalDislikes + 1}
        case ACTION_DECREMENT_DISLIKE :
            return {...state, totalDislikes: state.totalDislikes - 1}
        default:
            return {...state}
    }
}

export default DislikeReducer;