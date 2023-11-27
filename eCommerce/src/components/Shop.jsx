import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
function Shop({darkMode}) {
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

    <div className="shop-container" style={itemStyle}>
        <h1>Laptops</h1>
        <div className="shop-row">
            <ItemList category={"laptops"} featured={false} darkMode={darkMode} />
        </div>
        <h1>Keyboards</h1>
        <div className="shop-row">
            <ItemList category={"keyboards"} featured={false} darkMode={darkMode} />
        </div>
        <h1>Mice</h1>
        <div className="shop-row">
            <ItemList category={"mice"} featured={false} darkMode={darkMode} />
        </div>
        <h1>Headsets</h1>
        <div className="shop-row">
            <ItemList category={"headphones"} featured={false} darkMode={darkMode} />
        </div>
    </div>
);
}

export default Shop;