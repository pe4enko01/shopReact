import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectItems = createSelector(
    [selectShop],
    shop => shop.collections
)