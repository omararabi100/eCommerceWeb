import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'

function App() {

    return (
        <div>
            <NavBar />
            <div className='content'>
                <AppRoutes />
            </div>
        </div>
    )
}

export default App
