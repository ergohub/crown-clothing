import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import '../checkout/checkout.styles.scss';

const CheckOut = () => {
    const { cartItems, addItemToCart, cartTotal, removeItemToCart, removeProductFromCart } = useContext(CartContext);




    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => {
                const { id, imageUrl, name, price, quantity } = item;

                // functional handlers
                const removeItemHandler = () => removeItemToCart(item);
                const addItemHandler = () => addItemToCart(item);
                const removeProductHandler = () => removeProductFromCart(item);

                return (
                    <div key={id} className='checkout-item-container'>
                        <div className="image-container">
                            <img src={imageUrl} alt={`${name}`} />
                        </div>
                        <span className='name'> {name} </span>

                        <span className="quantity">
                            <div className="arrow"><span onClick={removeItemHandler}>&#10094;</span></div>
                            <span className="value">{quantity}</span>
                            <div className="arrow"><span onClick={addItemHandler}>&#10095;</span></div>
                        </span>

                        <span className="price"> {price} </span>
                        <div className="remove-button"><span onClick={removeProductHandler}>&#10005;</span></div>






                    </div>
                )
            })}
            <span className="total">Total: £ {cartTotal}</span>
        </div>
    )
}

export default CheckOut;