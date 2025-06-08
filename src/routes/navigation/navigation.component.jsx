// React Components
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import '../../routes/navigation/navigation.style.scss';
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
            <div className="navigation">
                <Link className="logo-container" to='/'><Crownlogo className="logo" /></Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to={'/shop'}>Shop</Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>

                    ) :
                        <Link className='nav-link' to='/auth'>SIGN IN</Link>
                    }
                    <CartIcon />
                </div>
                {isOpen && <CartDropDown />}
            </div>
            <Outlet />
        </>

    );
};

export default Navigation;