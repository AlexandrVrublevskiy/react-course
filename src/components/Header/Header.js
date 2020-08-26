import React from 'react';
import logo from './logo.svg';
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.App_header}>
            <img src={logo} className={style.App_logo} alt={style.logo} />
            <p>
                Hello world! Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className={style.App_link}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

export default Header;


