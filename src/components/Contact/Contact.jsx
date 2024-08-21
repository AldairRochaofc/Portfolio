import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/Email.svg';
import location_icon from '../../assets/location.svg';
import call_icon from '../../assets/call.svg';

export const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
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
            setShowModal(true); // Exibe o modal
            event.target.reset(); // Limpa os campos do formulário
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-tittle">
                <h1>Get in touch</h1>
                <img src="#" alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets Talk</h1>
                    <p className='content-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas hic facere, commodi ratione sequi nemo eveniet provident dolorem! Sunt autem consectetur qui dignissimos, veniam iusto at. Rerum, placeat error!</p>
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
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Digite seu nome' name="Nome"required />
                    <label htmlFor="">Seu E-mail</label>
                    <input type="email" placeholder='Digite seu E-mail' name="Email"required />
                    <label htmlFor="Write your message here"></label>
                    <textarea name="messege" rows="8" placeholder='Digite sua Mensagem' required></textarea>
                    <button type='submit' className="contact-submit">Enviar</button>
                </form>
            </div>

            {/* Modal */}
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
