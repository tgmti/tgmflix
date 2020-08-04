import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="TGMFlix" className="Logo" ></img>
            </a>

            <a href="/" className="ButtonLink">
                Novo Video
            </a>
        </nav>
    )
}

export default Menu;