import React from "react";
import ItemList from "./ItemList";
function Shop() {

    return (

    <div className="shop-container">
        <h1>Laptops</h1>
        <div className="shop-row">
            <ItemList n={8} />
        </div>
        <h1>Keyboards</h1>
        <div className="shop-row">
            <ItemList n={8} />
        </div>
        <h1>Mouse</h1>
        <div className="shop-row">
            <ItemList n={4} />
        </div>
        <h1>Headsets</h1>
        <div className="shop-row">
            <ItemList n={4} />
        </div>
    </div>
);
}

export default Shop;