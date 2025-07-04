// Compnents
import { createContext, useState, useEffect, useReducer } from 'react';

// Cart Context - Stores data related to the cart
export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => { },
    cartItems: [], // Array of items stored in the cart
    addItemToCart: () => { }, // Control what we add to cartItems -> Product plus qty
    removeItemfromCart: () => { },
    removeProductFromCart: () => { },
    itemCount: 0,
    cartTotal: 0
});

const CART_ITEM_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
};

// Use Reducer for state management

const INITIAL_STATE = {
    isOpen: false,
    cartItems: [],
    itemCount: 0,
    cartTotal: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    // console.log(action)
    switch (type) {
        case CART_ITEM_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CART_ITEM_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isOpen: payload,
            };

        default:
            throw new Error(`Unhandled type ${type} in the cartItemReducer`)
    }
}
export const CartProvider = ({ children }) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [itemCount, setItemCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { cartItems, itemCount, cartTotal, isOpen } = state;

    const updateCartReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((cartTotal, cartItem) => cartTotal + (cartItem.quantity * cartItem.price), 0)

        dispatch({
            type: CART_ITEM_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: newCartItems,
                itemCount: newCartCount,
                cartTotal: newCartTotal,
            }
        })
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartReducer(newCartItems);
    };

    const removeItemToCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartReducer(newCartItems);

    };

    const removeProductFromCart = (productToDelete) => {
        const newCartItems = clearCartItem(cartItems, productToDelete)
        updateCartReducer(newCartItems);
    };

    const setIsOpen = (bool) => {
        dispatch({
            type: CART_ITEM_TYPES.SET_IS_CART_OPEN,
            payload: bool,
        })
    }

    // // Update item quantities
    // useEffect(() => {
    //     const newItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0) // Helper func. to add item totals
    //     setItemCount(newItemCount);
    // }, [cartItems]);

    // // Update price total subject to quantities
    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce((cartTotal, cartItem) => cartTotal + (cartItem.quantity * cartItem.price), 0)
    //     setCartTotal(newCartTotal);
    // }, [cartItems]);

    // Helper funtion for addItemToCart
    const addCartItem = (cartItems, productToAdd) => {

        // - Find if cartIems constins productToAdd
        const existingItem = cartItems.find(
            (cartItem) => cartItem.id === productToAdd.id
        );

        // - If yes, increment quantity
        if (existingItem) {
            return cartItems.map((cartItem) =>
                cartItem.id === productToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )

        }
        // - Return new array with modified cartItems / new cartItem
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }

    const removeCartItem = (cartItems, cartItemToRemove) => {

        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id === cartItemToRemove.id
        );

        if (existingCartItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
        };

        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )
    };

    const clearCartItem = (cartItems, productToDelete) => {
        return cartItems.filter(cartItem => cartItem.id !== productToDelete.id)
    };

    const values = {
        isOpen,
        setIsOpen,
        addItemToCart,
        cartItems,
        itemCount,
        cartTotal,
        removeItemToCart,
        removeProductFromCart
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

