import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar({showHide, darkMode}) {
    const [primaryColor, setPrimaryColor] = useState("white")
    const [secondaryColor, setSecondaryColor] = useState("#333")
    useEffect(() => {
        if (darkMode) {
            setPrimaryColor("#333")
            setSecondaryColor("white")
        }
        else {
            setPrimaryColor("white")
            setSecondaryColor("#333")
        }
    }, [darkMode])
    const itemStyle = {
        backgroundColor: primaryColor,
        color: secondaryColor
    }
    return (
        <div className='nav-bar' style={itemStyle}>
            <div className='logo-container'>
                <img src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" className='logo-list' onClick={showHide} />
                <img src="https://static.vecteezy.com/system/resources/previews/016/016/817/non_2x/ecommerce-logo-free-png.png" className='logo-nav' />
                <h1 className='nav-title' style={itemStyle}> Electro</h1>
            </div>
            <div className="link-container">
                <Link to="" style={itemStyle}>Home</Link>
                <Link to="about" style={itemStyle}>About</Link>
                <Link to="contact" style={itemStyle}>Contact</Link>
                <Link to="shop" style={itemStyle}>Shop</Link>
                <Link to="cart" style={itemStyle}>Cart</Link>
            </div>
        </div>
    )
}

export default NavBar