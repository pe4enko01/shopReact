import CartActionTypes from './card.types'


const INITIAL_STATE = {
    hidden: true
}

const cardReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hiden: !state.hidden
            }

        default:
            return state;
    }
}

export default  cardReduser;