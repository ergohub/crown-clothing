// React Components
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from './navigation.styles'
// import './navigation.style.jsx';
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';

// User components
import CartIcon from "../../components/cart/cart-icon.component";
import CartDropDown from "../../components/cart/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

import { CartContext } from "../../contexts/cart.context";

const Navigation = () => { /* Our top level navigtion Component */
    const { currentUser } = useContext(UserContext)
    const { isOpen } = useContext(CartContext)
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'><Crownlogo className="logo" /></LogoContainer>
                <NavLinksContainer>
                    <NavLink to={'/shop'}>Shop</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>

                    ) :
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </>

    );
};

export default Navigation;