
//React
import { useContext } from 'react';

// Components
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

// styles
import { CartIconContainer, ShopIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isOpen, setIsOpen, itemCount } = useContext(CartContext);
    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <CartIconContainer onClick={toggleIsOpen}>
                <CartLogo className='shopping-icon' />
                <span className='item-count'>{itemCount}</span> {/* Item Number */}
            </CartIconContainer>
        </>
    )
}

export default CartIcon;