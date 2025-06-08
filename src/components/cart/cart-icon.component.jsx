
//React
import { useContext } from 'react';

// Components
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

// styles
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isOpen, setIsOpen, itemCount } = useContext(CartContext);
    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <>

            <div className='cart-icon-container' onClick={toggleIsOpen}>
                <CartLogo className='shopping-icon' />
                <span className='item-count'>{itemCount}</span> {/* Item Number */}
            </div>
        </>
    )
}

export default CartIcon;