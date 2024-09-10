import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import CertificadoCypress from '../../assets/Certificado_de_Conclusao_Cypress.pdf'; // Importando o arquivo

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Meus Cursos</h1>
        <img src="#" alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                {service.s_name === "Cypress" ? (
                  <p>
                    <a
                      className='link-cert'
                      href={CertificadoCypress}
                      download="Certificado_de_Conclusao_Cypress.pdf"
                    >
                    Certificado
                    </a>
                  </p>
                ) : service.link ? (
                  <p>
                    <a
                      className='link-cert'
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado
                    </a>
                  </p>
                ) : (
                  <p>Sem certificado disponível</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
