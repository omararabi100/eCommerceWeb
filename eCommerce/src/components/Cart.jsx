import React from "react";
import Item from "./Item";

function Cart({cartItems, updateItemQuantity}) {
    const updateItem = (item, quantity) => {
        updateItemQuantity(item, quantity)
    }
    return (
        <div className="cart-container">
            {cartItems.map((item,Index) =>(
                <div className="cart-item" key={Index}>
                    <h2>{item.name}</h2>
                    <h3>{item.quantity}</h3>
                    <h3>{item.price}</h3>
                    <button onClick={() => updateItem(item, 1)}>Add</button>
                    <button onClick={() => updateItem(item, -1)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Cart