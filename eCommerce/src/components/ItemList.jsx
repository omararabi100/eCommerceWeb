import React, { useEffect, useState } from "react";
import Item from "./Item";
import { products } from "../products.js"

function ItemList({category}) {
    const [list, setList] = useState([])
    useEffect(() => {
        const tempList = []
        products.forEach((product) => {
            if (product.category == category) {
                tempList.push(product)
            }
            setList(tempList)
        })
    }, [])
    return (
        <div className="item-list">
            {list.map((item,Index) =>(
            <Item 
            key={Index}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            />))}
        </div>
);
}

export default ItemList;