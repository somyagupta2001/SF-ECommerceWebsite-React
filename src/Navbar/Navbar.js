import React from 'react';
import cartIcon from '../icons/cart.png';
import logo from '../icons/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <Link to="/"><img src={logo} className="logo-img" alt="Logo" /></Link>
            <Link to="/Cart"><img src={cartIcon} className="cart-img" alt="Cart" /></Link>
        </div>
     );
}
 
export default Navbar;