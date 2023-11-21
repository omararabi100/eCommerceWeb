import { useState } from 'react'
import { Link } from 'react-router-dom';

function SideBar({translateXValue, showHide}) {

    return (
        <div className='side-bar'
        style={{
            transform: `translateX(${translateXValue}%)`,
            transition: 'transform 0.3s ease',
        }}
        >
            <div className='logo-container'>
                <img src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" className='logo-list' onClick={showHide}/>
                <img src="https://static.vecteezy.com/system/resources/previews/016/016/817/non_2x/ecommerce-logo-free-png.png" className='logo-side' />
            </div>
            <div className="link-container-side">
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="shop">Shop</Link>
                <Link to="cart">Cart</Link>
            </div>
        </div>
    )
}

export default SideBar