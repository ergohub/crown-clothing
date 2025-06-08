// Compnents
import { createContext, useState, useEffect } from "react";

// Cart Context - Stores data related to the cart
export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => { },
    cartItems: [], // Array of items stored in the cart
    addItemToCart: () => { }, // Control what we add to cartItems -> Product plus qty
    itemCount: 0
});

export const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const newItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setItemCount(newItemCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => { // Triggered when user clicks 'Add to Cart' button
        setCartItems(addCartItem(cartItems, productToAdd))
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

    const values = { isOpen, setIsOpen, addItemToCart, cartItems, itemCount };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

