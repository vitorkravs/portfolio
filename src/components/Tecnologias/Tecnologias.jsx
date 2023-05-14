import { FaReact } from 'react-icons/fa';
import { FaHtml5, FaCss3  } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { BsGit, BsGithub } from 'react-icons/bs';

import './Tecnologias.css'

const Tecnologias = () => {
  const imgUrl = `${process.env.PUBLIC_URL}/images/foguete.png`
  return (
    <div className='tecnologias'>
        <h1>Tecnologias utilizadas</h1>
        <img src={imgUrl} alt="foguete" />
        <main className='main-container'>
            <section className='divisoes react'>
              <span className='span-borda'/>
              <span className='span-borda'/>
              <i><FaReact/></i>
              <p>React: O React é uma biblioteca JavaScript que permite criar interfaces de usuário dinâmicas e responsivas. Escolhi usar o React nesse portfólio, pois a criação de componentes reutilizáveis e personalizados permitem que os usuários interajam com o conteúdo de maneira mais atraente e agradável. E a organização do projeto fica muito mais simples.</p>
              </section>
            <section className='divisoes estrutura'>   
              <span className='span-borda'/>
              <span className='span-borda'/>
              <i><FaHtml5/>  <FaCss3/>  <DiJavascript/></i>
              <p>Claro que também usei a triade da web, JavaScript linguagem de programação usada para criar e controlar comportamentos em páginas. <br/>HTML é uma linguagem de marcação que é usada para criar a estrutura e conteúdo básico de páginas web. <br />CSS é uma linguagem de estilo que é usada para controlar a aparência e layout de páginas web.</p>
              </section>
            <section className='divisoes git'> 
            <span className='span-borda'/>
            <span className='span-borda'/>
              <i><BsGit/> | <BsGithub/></i>
              <p>Para facilitar o versionamento e a organização do meu projeto de portfólio, utilizei o Git e o GitHub. Com o Git, pude gerenciar as alterações de código-fonte ao longo do tempo, enquanto o GitHub permitiu a hospedagem do meu projeto na nuvem e a colaboração com outros desenvolvedores.</p>
              </section>
        </main>  
    </div>
  )
}

export default Tecnologias