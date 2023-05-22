import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import './Contato.css';

const Contato = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tbx75h3', 'template_rdpfkto', form.current, 'fvkhI1Enx63ZeuZ_w')
      .then(
        (result) => {
          console.log(result.text);
          setEnviado(true);
          const trocar = document.getElementById('button-submit');
          const aparecerEnviado = document.getElementById('p-enviado')
          trocar.style.display = 'none'
          trocar.disabled = {enviado};
          aparecerEnviado.style.display = 'block'
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer className="footer">
      <h1>Contato</h1>
      <div className="links">
        <a href="https://github.com/vitorkravs" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/vitor-kravszenko-80748a234/" target="_blank" rel="noreferrer">
          Linkedin
        </a>
      </div>
      <div className="enderecos">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>Nome</label>
          <input type="text" name="name" required />
          <label>Mensagem</label>
          <textarea name="message" placeholder="Digite seu email no final, para eu entrar em contato :)" required />
          <input id="button-submit" type="submit" value="Enviar" disabled={enviado} />
          <p id='p-enviado'>enviado</p>
        </form>
      </div>
    </footer>
  );
};

export default Contato;