import { SET_GIF } from "../actions";

const initialGifState = {
    gif: [],
}

function GifReducer(state = [], action) {
    switch (action.type) {
        case SET_GIF:
            return[...action.gif ];
            default: 
                return state;
    }
}

export default GifReducer;