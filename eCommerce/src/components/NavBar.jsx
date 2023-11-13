import { useState } from 'react'
import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function NavBar() {

    return (
        <div className='nav-bar'>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
        </div>
    )
}

export default NavBar