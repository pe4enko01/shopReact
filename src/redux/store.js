import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import { persistStore } from "redux-persist";
import rootReducer from './root-reduser'

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)

export default {store, persistor};