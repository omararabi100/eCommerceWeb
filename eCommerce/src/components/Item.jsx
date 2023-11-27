import React from "react";
import { Link } from 'react-router-dom';


function Item({id, name, image, price, description}){

    const imgStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const product = {id:id}
    return(
        <Link to={`/product/${product.id}`}>
            <div className="product">
                <div className="img" style={imgStyle}></div>
                <h2>{name}</h2>
                <p>${price}</p>
                <button className="button-product">Buy now</button>
            </div>
        </Link>
    )
} 
export default Item