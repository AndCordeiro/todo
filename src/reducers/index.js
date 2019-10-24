import { combineReducers } from 'redux';

import tasksToDo from './todo';
import tasksDoing from './doing';
import tasksDone from './done';
import lastId from './lastId';

const rootReducer = combineReducers({
    tasksToDo,
    tasksDoing,
    tasksDone,
    lastId
});

export default rootReducer;