// Compnents
import { createContext, useState, useEffect } from 'react';

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

export const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)

    // Update item quantities
    useEffect(() => {
        const newItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setItemCount(newItemCount);
    }, [cartItems]);

    // Update price total subject to quantities
    useEffect(() => {
        const newCartTotal = cartItems.reduce((cartTotal, cartItem) => cartTotal + (cartItem.quantity * cartItem.price), 0)
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => { // Triggered when user clicks 'Add to Cart' button
        setCartItems(addCartItem(cartItems, productToAdd))
    };

    const removeItemToCart = (productToRemove) => { // Triggered when user clicks 'Add to Cart' button
        setCartItems(removeCartItem(cartItems, productToRemove))
    };

    const removeProductFromCart = (productToDelete) => { // Triggered when user clicks 'Add to Cart' button
        setCartItems(clearCartItem(cartItems, productToDelete))
    };

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

