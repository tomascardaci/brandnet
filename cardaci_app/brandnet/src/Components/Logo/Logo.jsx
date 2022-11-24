import React from 'react'
import logo from '../../assets/BRAND.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='Logo'>
        <img className="Logo-img" src={logo} alt="app-logo" />
    </div>
    
  )
}

export default Logo