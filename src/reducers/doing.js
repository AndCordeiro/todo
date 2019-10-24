import {
    ADD_TASK_DOING,
    DELETE_TASK_DOING
} from '../actions/types';

export default tasksDoing = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK_DOING:
            return [...state, action.payload]
        case DELETE_TASK_DOING:
            return state.filter(task => task.id !== action.payload)
        default:
            return state;
    }
}
