import React, { useEffect, useState } from "react";
import Item from "./Item";
import { products } from "../products.js"

function ItemList({category, featured, darkMode}) {
    const [list, setList] = useState([])
    const [primaryColor, setPrimaryColor] = useState("white")
    const [secondaryColor, setSecondaryColor] = useState("#444")
    useEffect(() => {
        const tempList = []
        if (featured) {
            products.forEach((product) => {
                if (product.featured) {
                    tempList.push(product)
                }
                setList(tempList)
            })
        }
        else {
            products.forEach((product) => {
                if (product.category == category) {
                    tempList.push(product)
                }
                setList(tempList)
            })
        }
    }, [])
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
        color: secondaryColor,
    }
    return (
        <div className="item-list" style={itemStyle}>
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