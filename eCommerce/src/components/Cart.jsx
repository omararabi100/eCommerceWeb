import React, { useEffect, useState } from "react";
import Item from "./Item";

function Cart({cartItems, updateItemQuantity, wallet, addMoneyToWallet, emptyCart}) {
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        calcTotal(cartItems)
    }, []);
    const updateItem = (item, quantity) => {
        updateItemQuantity(item, quantity)
        calcTotal(cartItems)
    }
    const calcTotal = (cartItems) => {
        var total = 0
        cartItems.forEach(item => {
            total = total + (item.price * item.quantity)
        })
        setTotalPrice(total)
    }
    const addMoney = (amount) => {
        addMoneyToWallet(amount)
    }
    const buy = () => {
        if (wallet >= totalPrice) {
            addMoney(-totalPrice)
            emptyCart()
            setTotalPrice(0)
        }
    }
    return (
        <div className="cart-container">
            <div className="cart-items">
                {cartItems.map((item,Index) =>(
                    <div className="cart-item" key={Index}>
                        <h2>{item.name}</h2>
                        <h3>Price: ${item.price}</h3>
                        <button className="add-quantity-btn" onClick={() => updateItem(item, 1)}> + </button>
                        <span> {item.quantity} </span>
                        <button className="remove-quantity-btn" onClick={() => updateItem(item, -1)}> - </button>
                    </div>
                ))}
            </div>
            <div className="cart-container-right">
                <h1>Total Price: ${totalPrice}</h1>
                <h1>wallet: ${wallet}</h1>
                <button onClick={() => addMoney(10000)}>Add $10000</button>
                <button onClick={buy}>Buy</button>
            </div>
        </div>
    )
}

export default Cart