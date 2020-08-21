import React from 'react';
import './NavBar.css';

let NavBar = () => {
    return (
        <nav className='nav'>
            <div>
               <a href='#s'>Profile</a>
            </div>
            <div>
               <a href='#s'>Massaget</a>
            </div>
            <div>
               <a href='#s'>News</a>
            </div>
            <div>
               <a href='#s'>Music</a>
            </div>
            <div>
               <a href='#s'>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;