import { createSelector } from "reselect";
const selectCartReducer = (state) => state.cart; // recieve all items in cart from cartReducer via Root Reducer

//getting the cart items off the slice of our state (selectCartReducer)
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((cartTotal, cartItem) => cartTotal + (cartItem.quantity * cartItem.price), 0)
);

// const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
// const newCartTotal = newCartItems.reduce((cartTotal, cartItem) => cartTotal + (cartItem.quantity * cartItem.price), 0)