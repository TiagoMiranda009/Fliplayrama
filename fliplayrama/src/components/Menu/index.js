import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
           <a href="/"> 
            <img className="Logo" src={Logo} alt="Fliplayrama Logo" />
           </a>

           <ButtonLink as="a" className="ButtonLink" href="/">
               Novo video
           </ButtonLink>
        </nav>
    );
}

export default Menu;