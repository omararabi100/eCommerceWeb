import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../products.js"

function Product({addToCart, darkMode}) {
    const [primaryColor, setPrimaryColor] = useState("white")
    const [secondaryColor, setSecondaryColor] = useState("#444")
    useEffect(() => {
        if (darkMode) {
            setPrimaryColor("#666")
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
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id, 10));
    const addItem = (product) => {
        addToCart(product)
    }
    if (!product) {
        return <div>Product not found</div>;
    }
    return(    
      <div className="bodybackground" style={itemStyle}>
        <div className=" product-container-inner" style={itemStyle}>
          <img src={product.image} />
          <h2>{product.name}</h2>
          <p id="pdescription">{product.description}</p> 
          <p id="pprice">${product.price}</p>
          <button className="buttonp" onClick={() => addItem(product)}>Add to Cart</button>
        </div>
    </div>
    
    )
} 
export default Product