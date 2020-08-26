import React from 'react';
import style from'./NavBar.module.css';

let NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
               <a href='#profile'>Profile</a>
            </div>
            <div className={style.item}>
               <a href='#massages'>Massages</a>
            </div>
            <div className={style.item}>
               <a href='#news'>News</a>
            </div>
            <div className={style.item}>
               <a href='#music'>Music</a>
            </div>
            <div className={style.item}>
               <a href='#settings'>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;