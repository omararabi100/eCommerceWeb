import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../products.js"

function Product({addToCart}) {

    const { id } = useParams();

    const product = products.find(product => product.id === parseInt(id, 10));
    const addItem = (product) => {
        addToCart(product)
    }
    if (!product) {
        return <div>Product not found</div>;
    }
    return(    
      <div className="bodybackground">
        <div className=" product-container-inner">
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