
//React
// import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
// import { CartContext } from '../../contexts/cart.context';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.reducer';

// styles
import { CartIconContainer } from './cart-icon.styles';

const CartIcon = () => {
    // const { isOpen, setIsOpen, itemCount } = useContext(CartContext);
    const dispatch = useDispatch()
    const itemCount = useSelector(selectCartCount)
    const isOpen = useSelector(selectIsCartOpen)
    const toggleIsOpen = () => dispatch(setIsCartOpen(!isOpen));

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