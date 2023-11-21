import React from "react";
import ItemList from "./ItemList";

function Home() {
    
    return (
        <div className="home-container">
            <div className="home-img-container"></div>
            <h2>Trending Products</h2>
            <div className="shop-row">
                <ItemList category={"laptops"}/>
            </div>
        </div>
    );
}

export default Home;