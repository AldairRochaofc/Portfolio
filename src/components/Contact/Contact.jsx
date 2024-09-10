import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/Email.svg';
import location_icon from '../../assets/location.svg';
import call_icon from '../../assets/call.svg';

export const Contact = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Estado para o carregamento

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Ativa o carregamento

        const formData = new FormData(event.target);
        formData.append("access_key", "3b2fae2d-9c52-4268-821e-44f1cdd8c8d4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            setShowModal(true);
            event.target.reset(); 
        }
        setIsLoading(false); 
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-tittle">
                <h1>Entre em Contato</h1>
                <img src="#" alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Vamos conversar</h1>
                    <p className='content-p'>Tem uma ideia, projeto ou pergunta? Estou aqui para ajudar! Entre em contato e vamos trabalhar juntos para transformar suas ideias em soluções digitais. Estou à disposição para colaborar e encontrar a melhor forma de realizar seus objetivos. Vamos conversar!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img className='icons' src={mail_icon} alt=""/> <p>aldairmurilo000@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img className='icons' src={call_icon} alt=""/> <p> +55 (71) 98308 - 0243</p>
                        </div>
                        <div className="contact-detail">
                            <img className='icons' src={location_icon} alt=""/> <p>BA, Salvador</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Seu Nome</label>
                    <input type="text" placeholder='Digite seu nome' name="Nome" required />
                    <label htmlFor="">Seu E-mail</label>
                    <input type="email" placeholder='Digite seu E-mail' name="Email" required />
                    <label htmlFor="Write your message here"></label>
                    <textarea name="messege" rows="8" placeholder='Digite sua Mensagem' required></textarea>
                    <button type='submit' className="contact-submit" disabled={isLoading}>
                        {isLoading ? <div className="loader"></div> : 'Enviar'}
                    </button>
                </form>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Email Enviado</h2>
                        <p>Seu email foi enviado com sucesso!</p>
                        <button onClick={() => setShowModal(false)}>Ok</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
