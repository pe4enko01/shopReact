import {combineReducers} from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import userReduser from "./user/user.reduser";
import cardReduser from "./card/card.reduser";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']

}

export default combineReducers({
    user: userReduser,
    cart: cardReduser
})