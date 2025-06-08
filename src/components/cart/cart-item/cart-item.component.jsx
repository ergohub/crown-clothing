

// Styles
import '../cart-item/cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { name, price, quantity } = cartItem;
    return (
        <div>
            <h3>{name}</h3>
            <span>Price: {price} </span>
            <span>QTY: {quantity}</span>
        </div>
    )
}

export default CartItem;