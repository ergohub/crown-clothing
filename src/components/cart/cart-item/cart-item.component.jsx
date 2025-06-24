

// Styles
import { CartItemContainer, Image, ItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <>
            <CartItemContainer>
                {/* imageURL = {imageUrl} */}
                <Image src={imageUrl} alt={`${name}`} />
                <ItemDetails>
                    <span className='name'>{name}</span>
                    <span>{quantity} x £{price}</span>
                </ItemDetails>
            </CartItemContainer>
        </>
    )
}

export default CartItem;