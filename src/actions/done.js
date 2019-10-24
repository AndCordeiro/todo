import {
    DELETE_TASK_DONE,
    ADD_TASK_DOING,
    ADD_TASK
} from './types';

export const returnTaskDoing = ({ item }) => (dispatch) => {
    dispatch({ type: ADD_TASK_DOING, payload: item });
    dispatch({ type: DELETE_TASK_DONE, payload: item.id });
};

export const returnTaskToDo = ({ item }) => (dispatch) => {
    dispatch({ type: ADD_TASK, payload: item });
    dispatch({ type: DELETE_TASK_DONE, payload: item.id });
};

export const deleteTaskDone = (id) => (dispatch) => {
    dispatch({ type: DELETE_TASK_DONE, payload: id });
};