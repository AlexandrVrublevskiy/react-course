import React from 'react';
import style from'./NavBar.module.css';
import { NavLink } from 'react-router-dom';

let NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item}`}>
               <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
               <NavLink to='/massages' activeClassName={style.active}>Massages</NavLink>
            </div>
            <div className={style.item} activeClassName={style.active}>
               <NavLink to='/news'>News</NavLink>
            </div>
            <div className={style.item} activeClassName={style.active}>
               <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={style.item} activeClassName={style.active}>
               <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;