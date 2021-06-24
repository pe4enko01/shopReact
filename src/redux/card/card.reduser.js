import CartActionTypes from './card.types'


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
                cartItems: [...state.cartItems, action.payload]
            }

        default:
            return state;
    }
}

export default  cardReduser;