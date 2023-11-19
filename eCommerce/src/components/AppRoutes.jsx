import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Shop from './Shop';
import Cart from './Cart';
import Product from './Product';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    );
}

export default AppRoutes