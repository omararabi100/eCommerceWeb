import React, { useEffect, useState } from "react";
import { codes } from "../codes"

function Cart({cartItems, updateItemQuantity, wallet, addMoneyToWallet, emptyCart}) {
    const [totalPrice, setTotalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [code, setCode] = useState("")
    const [key, setKey] = useState(0)
    const [msg, setMsg] = useState("")
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
        setKey(key + 1)
    }
    const addMoney = (amount) => {
        addMoneyToWallet(amount)
    }
    const buy = () => {
        if (wallet >= (totalPrice*((100-discount)/100))) {
            addMoney(-(totalPrice*((100-discount)/100)))
            emptyCart()
            setTotalPrice(0)
            setDiscount(0)
        }
    }
    const redeem = () => {
        setMsg("")
        const codeIndex = codes.findIndex((icode) => code === icode.code)
        if (codes[codeIndex]) {
            const type = codes[codeIndex].type
            const value = codes[codeIndex].value
            if (codes[codeIndex].used) {
                setMsg("Code already used")
            }
            else if (type == "discount") {
                getDiscount(value)
                codes[codeIndex].used = !codes[codeIndex].used
            }
            else if (type == "gift") {
                addMoney(value)
                codes[codeIndex].used = !codes[codeIndex].used
            }
            setCode("")
        }
        else {
            setMsg("Invalid Code")
        }
        
        calcTotal(cartItems)
    }
    const getDiscount = (value) => {
        if ((discount + value) <= 100) {
            setDiscount(discount + value)
        }
        else {
            setDiscount(100)
        }
    }
    return (
        <div className="cart-container">
            <div className="cart-items">
                {cartItems.map((item,Index) =>(
                    <div className="cart-item" key={Index}>
                        <div className="cart-img" style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center',}}></div>
                        <div className="cart-description ">
                            <h2>{item.name}</h2>
                            <div className="quantity-container">
                                <h3>Price: ${item.price}</h3>
                                <button className="add-quantity-btn" onClick={() => updateItem(item, 1)}> + </button>
                                <span className="quantity"> {item.quantity} </span>
                                <button className="remove-quantity-btn" onClick={() => updateItem(item, -1)}> - </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-container-right">
                <h1>Total Price: ${totalPrice}</h1>
                <h1>Wallet: ${wallet}</h1>
                <h1>Discount: {discount}%</h1>
                <h1>Discounted Price: ${(totalPrice*((100-discount)/100))}</h1>
                <label htmlFor="input-code">Code: </label> 
                    <input type="text" value={code} onChange={(e) => {setCode(e.target.value)}}/> <br />
                <div>
                    <button className="redeem-btn" onClick={redeem}>Redeem</button>
                    <button className="buy-btn" onClick={buy}>Buy</button>
                </div>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Cart