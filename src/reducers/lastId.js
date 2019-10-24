import {
    SET_LAST_ID
} from '../actions/types';

export default lastId = (state = 0, action) => {
    switch (action.type) {
        case SET_LAST_ID:
            return action.payload
        default:
            return state;
    }
}