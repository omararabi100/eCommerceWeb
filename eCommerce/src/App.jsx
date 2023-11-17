import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'
import SideBar from './components/SideBar'

function App() {
    const [translateXValue, setTranslateXValue] = useState(-100)
    
    const showHide = () => {
        if (translateXValue === 0) {
            setTranslateXValue(-100)
          } else {
            setTranslateXValue(0)
          }
    }
    return (
        <div>
            <NavBar showHide={showHide}/>
            <SideBar showHide={showHide} translateXValue={translateXValue}/>
            <div className='content'>
                <AppRoutes />
            </div>
        </div>
    )
}

export default App
