import {
    ADD_TASK,
    DELETE_TASK,
    SET_LAST_ID
} from './types';
import {
    lastIdSelector
} from '../reducers/selectors';

export const addTask = ({ title, description }) => (dispatch, getState) => new Promise((resolve) => {
    if (title.length < 1) {
        throw new Error('Title not found.');
    }

    if (description.length < 1) {
        throw new Error('Description not found.');
    }

    const lastId = lastIdSelector(getState());
    const id = lastId + 1;
    dispatch({ type: ADD_TASK, payload: { title, description, id } });
    dispatch({ type: SET_LAST_ID, payload: id });
    resolve();
});

export const deleteTask = (id) => (dispatch) => {
    dispatch({ type: DELETE_TASK, payload: id });
};