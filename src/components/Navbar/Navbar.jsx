import React, { useState } from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'

function Navbar() {
  const [menu, setMenu] = useState("portfolio");

  return (
    <div id='navbar' className='navbar'>
      <img className='logo' src={logo} alt="" />
      <img src={menu_open} alt="" />
      <ul className='nav-menu'>
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p className='menu-item' onClick={() => setMenu("home")} >HomePage</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p className='menu-item' onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p className='menu-item' onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p className='menu-item' onClick={() => setMenu("portfolio")}>Portifolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p className='menu-item' onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
}

export default Navbar