import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import Index from './pages/Home/index.jsx'
import NavbarConnect from './pages/Home/navbarConnect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <NavbarDisconnect/> */}
        <NavbarConnect/>
        <Index/>
    </React.StrictMode>,
)
