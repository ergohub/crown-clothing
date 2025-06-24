// React Compoments
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import CartItem from './cart-item/cart-item.component';

import Button from '../button/button.component';
// Styles
// import './cart-dropdown.styles';
import { CartDropDownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);
    // console.log(cartItems)
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    !cartItems.length
                        ? (<EmptyMessage>Your cart is empty</EmptyMessage>)
                        : (cartItems.map(item => (
                            <CartItem key={item.id} cartItem={item}></CartItem>
                        )))
                }
            </CartItems>
            <Link to={'/checkout'}><Button>GO TO CHECKOUT</Button></Link>
        </CartDropDownContainer>
    )
}

export default CartDropDown;