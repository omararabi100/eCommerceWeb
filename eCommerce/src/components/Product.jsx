import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../products.js"

function Product() {

    const { id } = useParams();

    const product = products.find(product => product.id === parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }
    return(    
        <div className="product-container">
            bruh
            <img src={product.image} />
            <h2>{product.name}</h2>
            {/* <p>{price}</p>
            <p>{description}</p> */}
        </div>
    
    )
} 
export default Product