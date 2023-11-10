import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Home/index.jsx'
import NavbarDisconnect from './pages/Home/navbarDisconnect.jsx'
import NavbarConnect from './pages/Home/navbarConnect.jsx'
import FormRegister from './pages/Home/formRegister.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarDisconnect />
    <NavbarConnect />
    <Index />
    <FormRegister />

  </React.StrictMode>,
)
