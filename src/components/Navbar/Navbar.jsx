import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


function Navbar() {
  const [menu, setMenu] = useState("portfolio");
  const menuRef = useRef(null); // Correção: Não destruturar o useRef

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div id='navbar' className='navbar'>
      <img className='logo' src={logo} alt="" />
      <img className='nav-mob-open' src={menu_open} onClick={openMenu} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
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