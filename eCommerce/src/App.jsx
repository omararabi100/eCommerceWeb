import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
    const [translateXValue, setTranslateXValue] = useState(-100)
    const [cartItems, setCartItems] = useState([]);

    const showHide = () => {
        if (translateXValue === 0) {
            setTranslateXValue(-100)
          } else {
            setTranslateXValue(0)
          }
    }
    const addToCart = (item) => {
        const tempCart = cartItems
        const existingCartItemIndex = tempCart.findIndex((cartItem) => item.id === cartItem.id)
        const existingCartItem = tempCart[existingCartItemIndex]
        if (existingCartItem) {
            tempCart[existingCartItemIndex].quantity += 1 
        }
        else {
            tempCart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
                image: item.image,
            })
        }
        setCartItems(tempCart);
        console.log(cartItems)
    };
    const updateItemQuantity = (item, amount) => {
        const tempCart = cartItems
        const existingCartItemIndex = tempCart.findIndex((cartItem) => item.id === cartItem.id)
        const existingCartItem = tempCart[existingCartItemIndex]
        if (item.quantity == 1 && amount == -1) {

        }
        else {
            tempCart[existingCartItemIndex].quantity += amount
            setCartItems(tempCart)

        }
    }
    return (
        <div>
            <NavBar showHide={showHide}/>
            <SideBar showHide={showHide} translateXValue={translateXValue}/>
            <div className='content'>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} updateItemQuantity={updateItemQuantity} />}/>
                    <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
