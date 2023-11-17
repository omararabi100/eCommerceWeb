import React from "react";
import Item from "./Item";
import { products } from "../products.js"

function ItemList({n}) {
    return (
        <div className="item-list">
            {products.slice(0,n).map((item,Index) =>(
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

export default ItemList;