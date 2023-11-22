import React from "react";
import ItemList from "./ItemList";
function Shop() {

    return (

    <div className="shop-container">
        <h1>Laptops</h1>
        <div className="shop-row">
            <ItemList category={"laptops"} featured={false} />
        </div>
        <h1>Keyboards</h1>
        <div className="shop-row">
            <ItemList category={"keyboards"} featured={false} />
        </div>
        <h1>Mice</h1>
        <div className="shop-row">
            <ItemList category={"mice"} featured={false} />
        </div>
        <h1>Headsets</h1>
        <div className="shop-row">
            <ItemList category={"headphones"} featured={false} />
        </div>
    </div>
);
}

export default Shop;