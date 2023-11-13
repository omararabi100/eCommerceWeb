import { useState } from 'react'
import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function NavBar() {

    return (
        <div className='nav-bar'>
            <div className='logo-container'>
            <img src="https://static.vecteezy.com/system/resources/previews/016/016/817/non_2x/ecommerce-logo-free-png.png" className='logo-nav' />
            </div>
            <div className="link-container">
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">Cart</Link>
            </div>
        </div>
    )
}

export default NavBar