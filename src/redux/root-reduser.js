import {combineReducers} from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import userReduser from "./user/user.reduser";
import cardReduser from "./card/card.reduser";
import directoryRedycer from "./directory/directory.reducer";
import shopReducer from '../redux/shop/shop.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}
const rootReducer = combineReducers({
    user: userReduser,
    cart: cardReduser,
    directory: directoryRedycer,
    shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer)