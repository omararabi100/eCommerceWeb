import React from "react";
import ItemList from "./ItemList";

function Home() {
    
    return (
        <div className="home-container">
            <div className="home-img-container"></div>
            <h1>Trending Products</h1>
            <div className="shop-row">
                <ItemList category={"bundle"} featured={true}/>
            </div>
            <h1>Bundles</h1>
            <div className="shop-row">
                <ItemList category={"bundle"} />
            </div>
        </div>
    );
}

export default Home