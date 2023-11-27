import React from 'react';
import { useEffect, useState } from 'react'

function Footer({darkMode}) {
    const [primaryColor, setPrimaryColor] = useState("#e3e3e3")
    const [secondaryColor, setSecondaryColor] = useState("#333")
    useEffect(() => {
        if (darkMode) {
            setPrimaryColor("#333")
            setSecondaryColor("#e3e3e3")
        }
        else {
            setPrimaryColor("#e3e3e3")
            setSecondaryColor("#333")
        }
    }, [darkMode])
    const itemStyle = {
        backgroundColor: primaryColor,
        color: secondaryColor
    }
    return (
        <div className="footer" style={itemStyle}>
            <div className="footer-left">
            <h3>Payment Methods</h3>
            <ul>
                <li><a style={itemStyle}>Credit Card</a></li>
                <li><a style={itemStyle}>PayPal</a></li>
                <li><a style={itemStyle}>Bitcoin</a></li>
            </ul>
            </div>
            <div className="footer-right">
            <h3>Contact Us</h3>
            <ul>
                <li>Email: <a style={itemStyle}>info@electro.com</a></li>
                <li>Facebook: <a style={itemStyle}>Electro</a></li>
                <li>Instagram: <a style={itemStyle}>@electro</a></li>
            </ul>
            </div>
        </div>
    );
}

export default Footer;