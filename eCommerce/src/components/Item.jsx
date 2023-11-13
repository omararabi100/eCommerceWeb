import React from "react";

function Item({id, name, image, price, description}){
    return(
        <div className="product">
            <img src={image} />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
} 
export default Item