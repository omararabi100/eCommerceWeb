import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from 'react'

function Home({darkMode}) {
    const [primaryColor, setPrimaryColor] = useState("white")
    const [secondaryColor, setSecondaryColor] = useState("#444")
    useEffect(() => {
        if (darkMode) {
            setPrimaryColor("#444")
            setSecondaryColor("white")
        }
        else {
            setPrimaryColor("white")
            setSecondaryColor("#444")
        }
    }, [darkMode])
    const itemStyle = {
        backgroundColor: primaryColor,
        color: secondaryColor
    }
    return (
        <div className="home-container" style={itemStyle}>
            <div className="home-img-container"></div>
            <h1>Trending Products</h1>
            <div className="shop-row">
                <ItemList category={"bundle"} featured={true} darkMode={darkMode}/>
            </div>
            <h1>Bundles</h1>
            <div className="shop-row">
                <ItemList category={"bundle"} darkMode={darkMode}/>
            </div>
        </div>
    );
}

export default Home