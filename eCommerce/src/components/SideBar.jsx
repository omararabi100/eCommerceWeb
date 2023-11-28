import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function SideBar({translateXValue, showHide, changeTheme, darkMode}) {
    const [primaryColor, setPrimaryColor] = useState("white")
    const [secondaryColor, setSecondaryColor] = useState("#333")
    const [logoColor, setLogoColor] = useState("invert(0%)")
    useEffect(() => {
        if (darkMode) {
            setPrimaryColor("#333")
            setSecondaryColor("white")
            setLogoColor("invert(100%)")
        }
        else {
            setPrimaryColor("white")
            setSecondaryColor("#333")
            setLogoColor("invert(0%)")
        }
    }, [darkMode])
    const setDarkMode = (e) => {
        changeTheme(e.target.checked)
    }
    const itemStyleTop = {
        color: secondaryColor,
        borderBottom: "1px solid " + secondaryColor,
        borderTop: "1px solid " + secondaryColor,
        textDecoration: "none"
    }
    const itemStyle = {
        color: secondaryColor,
        borderBottom: "1px solid " + secondaryColor,
        textDecoration: "none"
    }
    const logoStyle = {
        filter: logoColor
    }
    return (
        <div className='side-bar'
        style={{
            transform: `translateX(${translateXValue}%)`,
            transition: 'transform 0.3s ease',
            backgroundColor: primaryColor
        }}
        >
            <div className='logo-container'>
                <img src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" className='logo-list' onClick={showHide} style={logoStyle}/>
                <img src="https://static.vecteezy.com/system/resources/previews/016/016/817/non_2x/ecommerce-logo-free-png.png" className='logo-side' style={logoStyle} />
            </div>
            <div className="link-container-side">
                <Link to="" onClick={showHide} style={itemStyleTop}>Home</Link>
                <Link to="about" onClick={showHide} style={itemStyle}>About</Link>
                <Link to="contact" onClick={showHide} style={itemStyle}>Contact</Link>
                <Link to="shop" onClick={showHide} style={itemStyle}>Shop</Link>
                <Link to="cart" onClick={showHide} style={itemStyle}>Cart</Link>
            </div>
            <div className="dm-label" style={itemStyle}>
                <p>Dark Mode</p>
                <label className="switch">
                    <input type="checkbox" onClick={setDarkMode} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default SideBar