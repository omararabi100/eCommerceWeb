import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AppRoutes