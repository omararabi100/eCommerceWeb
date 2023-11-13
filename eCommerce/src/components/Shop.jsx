import React from "react";
import Item from "./Item";
import { products } from "../products.js"

function Shop() {

    console.log(products)
    return (
        <div className="itemList">
            {products.map((item,Index)=>(
            <Item 
            key={Index}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            />))}
        </div>
);
}

export default Shop;