import {combineReducers} from "redux";

import userReduser from "./user/user.reduser";
import cardReduser from "./card/card.reduser";

export default combineReducers({
    user: userReduser,
    cart: cardReduser
})