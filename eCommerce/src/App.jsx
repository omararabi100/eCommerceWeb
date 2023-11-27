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
import Footer from './components/Footer';

function App() {
    const [translateXValue, setTranslateXValue] = useState(-100)
    const [overlay, setOverlay] = useState('none')
    const [cartItems, setCartItems] = useState([]);
    const [wallet, setWallet] = useState(0)
    const [darkMode, setDarkMode] = useState(false)
    const showHide = () => {
        if (translateXValue === 0) {
            setTranslateXValue(-100.5)
            setOverlay('none')
          } else {
            setTranslateXValue(0)
            setOverlay('block')
          }
    }
    const changeTheme = (state) => {
        setDarkMode(state)
        if (darkMode) {
            document.getElementsByTagName("body")[0].style.backgroundColor = "white"
        }
        else {
            document.getElementsByTagName("body")[0].style.backgroundColor = "#444"
        }
        console.log(darkMode)
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
        setCartItems(tempCart)
        console.log(cartItems)
    };
    const updateItemQuantity = (item, amount) => {
        const tempCart = cartItems
        const existingCartItemIndex = tempCart.findIndex((cartItem) => item.id === cartItem.id)
        const existingCartItem = tempCart[existingCartItemIndex]
        if (item.quantity == 1 && amount == -1) {
            tempCart.splice(existingCartItemIndex, 1)
        }
        else {
            tempCart[existingCartItemIndex].quantity += amount
            setCartItems(tempCart)

        }
    }
    const addMoneyToWallet = (amount) => {
        setWallet(wallet + amount)
    }
    const emptyCart = () => {
        setCartItems([])
    }
    return (
        <div>
            <NavBar showHide={showHide} darkMode={darkMode}/>
            <SideBar showHide={showHide} translateXValue={translateXValue} changeTheme={changeTheme} darkMode={darkMode}/>
            <div className='content'>
                <Routes>
                    <Route path="/" exact element={<Home darkMode={darkMode}/>} />
                    <Route path="/about" element={<About darkMode={darkMode}/>} />
                    <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
                    <Route path="/shop" element={<Shop darkMode={darkMode}/>} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} updateItemQuantity={updateItemQuantity} wallet={wallet} addMoneyToWallet={addMoneyToWallet} emptyCart={emptyCart} darkMode={darkMode}/>}/>
                    <Route path="/product/:id" element={<Product addToCart={addToCart} darkMode={darkMode}/>} />
                </Routes>
            </div>
            <Footer darkMode={darkMode}/>
            <div className="overlay" style={{display: overlay, transition: 'transform 0.5s ease'}} onClick={showHide}></div>
        </div>
    )
}

export default App
