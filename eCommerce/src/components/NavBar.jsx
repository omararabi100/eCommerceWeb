import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

function NavBar() {
    const [count, setCount] = useState(0)

    return (
        <div className='nav-bar'>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
        </div>
    )
}

export default NavBar