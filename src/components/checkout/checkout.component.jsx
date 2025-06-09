import { useContext } from "react";
import CheckOutItem from "./checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div>
            {cartItems.map((item) => (
                <CheckOutItem key={item.id} checkOutItem={item}></CheckOutItem>
            ))}
            <p>Total: {cartTotal}</p>
        </div>
    )
}

export default CheckOut;