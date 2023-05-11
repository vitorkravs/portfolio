import { Link } from 'react-scroll';
import React, { useState } from 'react';
import './NavBar.css';



const NavBar = () => {
  
  const imgUrl = `${process.env.PUBLIC_URL}/images/menu-hamburguer.png`
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">Portfólio</div>
        <button className="menu-icon" onClick={handleMenuClick}>
          {menuOpen ? <img src={imgUrl} alt="menu hamburguer" /> : <img src={imgUrl} alt="menu hamburguer" /> }
        </button>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link className='linksNav' to="Inicio" spy={true} smooth={true}>Início</Link></li>
        <li><Link className='linksNav' to="tecnologias" spy={true} smooth={true}>Tecnologias</Link></li>
        <li><Link className='linksNav' to="projetos" spy={true} smooth={true}>Projetos</Link></li>
        <li><Link className='linksNav' to="footer" spy={true} smooth={true}>Contato</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;