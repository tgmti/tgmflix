import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="TGMFlix" className="Logo" ></img>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>

        </nav>
    )
}

export default Menu;