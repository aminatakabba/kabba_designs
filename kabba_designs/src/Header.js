import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className="header__logo"
                    id="header__logo"
                    src={logo} 
                    alt="logo"/>
            </Link>
            <div className="header__nav">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <div className="header__option">
                        <h1>Home</h1>
                    </div>
                </Link>

                <Link to="/galeria" style={{ textDecoration: 'none'}}>
                    <div className="header__option">
                        <h1>Galería</h1>
                    </div>
                </Link>

                <Link to="/productos" style={{ textDecoration: 'none'}}>
                    <div className="header__option">
                        <h1>Productos</h1>
                    </div>
                </Link>

                <Link to="/contactos" style={{ textDecoration: 'none'}}>
                    <div className="header__option">
                        <h1>Contactos</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
