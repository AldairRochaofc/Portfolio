import React from 'react'
import './Hero.css'
import logo from '../../assets/Eu.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import download from '../../assets/download.svg'
const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img className='photo-eu' src={logo} alt="" />
        <h1><span>Eu sou Aldair Rocha,</span> Front-End Developer based in Brazil.</h1>
        <p>Eu sou um desenvolvedor front-end, moro na Bahia no Brasil, com pouco mais de 1 ano de experiencia</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume <img className='download-icon' src={download} alt="" /></div>
        </div>
    </div>
  )
}

export default Hero
