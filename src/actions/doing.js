import {
    DELETE_TASK_DOING,
    ADD_TASK_DONE,
    ADD_TASK
} from './types';

export const addTaskDone = ({ item }) => (dispatch) => {
    dispatch({ type: ADD_TASK_DONE, payload: item });
    dispatch({ type: DELETE_TASK_DOING, payload: item.id });
};

export const returnTaskToDo = ({ item }) => (dispatch) => {
    dispatch({ type: ADD_TASK, payload: item });
    dispatch({ type: DELETE_TASK_DOING, payload: item.id });
};

export const deleteTaskDoing = (id) => (dispatch) => {
    dispatch({ type: DELETE_TASK_DOING, payload: id });
};