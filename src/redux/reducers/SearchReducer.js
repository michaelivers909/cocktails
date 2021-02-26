import { SET_SEARCH } from "../actions";

const initialSearchState ={
    search: [],
}

function SearchReducer(state = [], action) {
    switch (action.type) {
        case SET_SEARCH:
            return[...action.search ];
        default:
            return state;
    }
}

export default SearchReducer;