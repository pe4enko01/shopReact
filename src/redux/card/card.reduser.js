import CartActionTypes from './card.types';
import { addItamToCard, removeItemFromCart } from './card.util'


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cardReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItamToCard(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CARD:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case  CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default  cardReduser;