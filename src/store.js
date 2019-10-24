import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducers from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import {
    composeWithDevTools
} from 'redux-devtools-extension';

const persistConfig = {
    timeout: 10000,
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'tasksToDo',
        'tasksDoing',
        'tasksDone',
        'lastId'
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };