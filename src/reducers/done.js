import {
    ADD_TASK_DONE,
    DELETE_TASK_DONE
} from '../actions/types';

export default tasksDone = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK_DONE:
            return [...state, action.payload]
        case DELETE_TASK_DONE:
            return state.filter(task => task.id !== action.payload)
        default:
            return state;
    }
}