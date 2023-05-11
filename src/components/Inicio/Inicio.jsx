import React, { useState, useEffect } from 'react';
import './Inicio.css'

const Inicio = () => {
  const imgUrl = `${process.env.PUBLIC_URL}img/perfil.jpg`

  const Typewriter = () => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setText('Meu nome é Vitor e sou um desenvolvedor que pode criar soluções digitais funcionais. Tenho uma base boa em HTML, CSS, JavaScript e React e tenho habilidades na construção de sites responsivos e aplicativos web interativos.');
        setCount((count) => count + 1);
      }, 20);
  
      return () => clearInterval(intervalId);
    }, []);

    return (
      <p>{text.slice(0, count)}<span className='blink'>|</span></p>
    );
  }

  return (
    <div className='Inicio'>
        <div className='perfil'>
            <img className='perfil-img' src={imgUrl} alt="foto de perfil" />
            <div className='perfil-informacoes'>
                <h2>Informações</h2>
                <p>Desenvolvido: vitor kravszenko</p>
                <p>E-mail: vitorkravs3@gmail.com</p>
                <p>GitHub: vitorkravs</p>
            </div>
        </div>
        <main className='sobre'>
          <h1>Sobre mim</h1>
          <Typewriter />
        </main>
    </div>
  )
}

export default Inicio;