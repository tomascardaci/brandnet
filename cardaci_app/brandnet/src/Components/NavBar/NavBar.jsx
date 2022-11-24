import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import MenuItems from '../MenuItems/MenuItems'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menuContainer'>
      <Logo/>
      <MenuItems/>
      <CartWidget/>
    </div>
  )
}

export default NavBar