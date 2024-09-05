import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import  user_icon from '../../assets/user.svg'
const Footer = () => {
  return (
    <div id='footer' className='Footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='icon-logo' src={footer_logo} alt="" />
                <p>Lorem ipsum dolor sit amitiis pariatur exercitationem velit asperiores impedit. Numquam cum eaque labore!</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Aldair Rocha. All Rights reserved. </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer