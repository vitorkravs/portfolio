import {useState} from 'react'

import './Projetos.css'


const Projetos = () => {
    const [indice, setIndice] = useState(0);

    function proximoSlide(e) {
        e.preventDefault()
        const novoIndice = indice + 1;
        if (novoIndice >= projetos.length) {
            setIndice(0);
        } else {
            setIndice(novoIndice);
  }
    }

    function slideAnterior(e) {
        e.preventDefault()
        const novoIndice = indice - 1;
        if (novoIndice < 0) {
            setIndice(projetos.length - 1);
        } else {
            setIndice(novoIndice);
        }
    }

    const projetos = [
        {url: 'https://vitorkravs.github.io/site-android/', title: 'Site Android'},
        {url: 'https://vitorkravs.github.io/projeto-cordel/', title: 'Projeto Cordel'},
        {url: 'https://vitorkravs.github.io/projeto_pokedex/', title: 'Projeto Pokedex'},
        {url: 'https://vitorkravs.github.io/aplicacao_de_clima/', title: 'Aplicação de Clima'},
        {url: 'https://vitorkravs.github.io/quiz_com_react/', title: 'Quiz com React'},
        
    ]

  return (
    <div className='projetos'>
        <h1>Projetos</h1>
        <p>Os desafios estão em ordem da minha evoloção, desde de um simples site usando html e css, a um projeto com react</p>
        <p>obs: Alguns projetos nao estão responsivos para mobile, estou resolvendo isso<br /> : &frasl;</p>
        <div className='container-iframe'>
            <h3>{projetos[indice].title}</h3>
            <iframe title='slide' src={projetos[indice].url} frameBorder={0}></iframe>
        </div>
        <form className='buttons'>
            <button onClick={slideAnterior}>Anterior</button>
            <button onClick={proximoSlide}>Próximo</button>
        </form>
    </div>
  )
}

export default Projetos