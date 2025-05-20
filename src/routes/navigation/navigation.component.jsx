import { Outlet, Link } from "react-router-dom";
import '../../routes/navigation/navigation.style.scss';
import { ReactComponent as Crownlogo } from '../../routes/navigation/assets/crown.svg';

const Navigation = () => { /* Our top level navigtion Component */
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'><Crownlogo className="logo" /></Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    <Link className='nav-link' to='/sign-in'>Sign In</Link>
                </div>
            </div>
            <Outlet />
        </>

    );
};

export default Navigation;