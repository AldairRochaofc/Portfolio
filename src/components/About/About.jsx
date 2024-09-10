import React from 'react'
import './About.css'
import profileImg from '../../assets/eu.png'

<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-tittle">
            <h1>Sobre mim</h1>
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img className='img-icon' src={profileImg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Sou Aldair Santos Rocha, desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais. Com um olhar atento para detalhes, busco sempre oferecer uma experiência de usuário intuitiva e agradável. Meu trabalho envolve transformar ideias em realidade digital, combinando criatividade com as mais recentes tecnologias e boas práticas de desenvolvimento. </p>
                    <p>Atualmente, estou cursando Engenharia de Software, o que me permite aplicar conhecimentos teóricos em projetos práticos. Meu foco é continuar evoluindo no desenvolvimento web, aprimorando minhas habilidades em HTML, CSS, JavaScript, ReactJS e outros frameworks.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"100%"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1> 1 + ANO </h1>
            <p> UM ANO DE EXPERIÊNCIA</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJETOS COMPLETOS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10</h1>
            <p>CLIENTES FELIZES</p>
        </div>
        </div>

    </div>
  )
}

export default About;