import React from 'react';
import './Hero.css';
import logo from '../../assets/Eu.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import download from '../../assets/download.svg';
import curriculo from '../../assets/curriculo.pdf';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.setAttribute('download', 'Curriculo - Aldair Rocha');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='hero' className='hero'>
      <img className='photo-eu' src={logo} alt="Minha foto" />
      <h1>
        <span>Eu sou Aldair Rocha,</span> Front-End Developer based in Brazil.
      </h1>
      <p>
        Eu sou um desenvolvedor front-end, moro na Bahia no Brasil, com pouco mais de 1 ano de experiência.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink id="contact-right" className='anchor-link' href='#contact-right'>Entrar em contato</AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownload}>
          Currículo
          <img className='download-icon' src={download} alt="Download Ícone" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
