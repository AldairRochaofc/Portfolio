import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data' 


const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-tittle">
        <h1>Meus Cursos</h1>
        <img src="#" alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((services,index)=>{
          return <div key={index} className="services-format">
            <h3>{services.s_no}</h3>
            <h2>{services.s_name}</h2>
            <p>{services.s_desc}</p>
            <div className="services-readmore">
              <p><a className='link-cert' href="">Certificado</a></p>
           
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services