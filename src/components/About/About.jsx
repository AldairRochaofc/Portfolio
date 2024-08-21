import React from 'react'
import './About.css'
import profileImg from '../../assets/eu.png'
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-tittle">
            <h1>About Me</h1>
            <img src="" alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img className='img-icon' src={profileImg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem hic vero repudiandae dignissimos totam eius magnam iste quis laborum iusto nostrum, eaque minus in aspernatur pariatur aut adipisci enim error?</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quam deserunt commodi provident. Natus rem rerum laborum, et quo fuga, inventore repudiandae illo similique amet ipsum sed, eaque cumque quod!</p>
    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+ Years</h1>
            <p>YEARS OF EXPERIENCES</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        </div>

    </div>
  )
}

export default About;