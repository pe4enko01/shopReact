import { createSelector } from "reselect";


const selectCart = state => state.cart;

const selectUser = state => state.user

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItems = createSelector(
    [selectCart, selectUser],
    (cart) => cart.cartItems
)

export const seletCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accQuantity, cartItem)=> accQuantity + cartItem.quantity, 0)
        
)

export const selectCartTotal = createSelector(
   [selectCartItems],
   cartItems => cartItems.reduce((accQuantity, cartItem)=> accQuantity + cartItem.quantity * cartItem.price, 0) 
)