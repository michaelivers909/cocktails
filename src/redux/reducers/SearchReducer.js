import { SET_SEARCH, CLEAR_SEARCH } from "../actions";

function SearchReducer(state = [], action) {
    switch (action.type) {
        case SET_SEARCH:
            return[...action.search ];
        case CLEAR_SEARCH:
            let newState = [];
            return newState;
        default:
            return state;
    }
}



export default SearchReducer;