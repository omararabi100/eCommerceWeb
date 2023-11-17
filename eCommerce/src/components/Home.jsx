import React from "react";
import ItemList from "./ItemList";

function Home() {
    return (
        <div className="home-container">
            <div className="home-img-container">
                <img src="https://blog.snappa.com/wp-content/uploads/2020/01/wordpress-featured-image-size.jpg" alt="" />
            </div>
            <h2>Trending Products</h2>
            <ItemList n={4}/>
        </div>
    );
}

export default Home;