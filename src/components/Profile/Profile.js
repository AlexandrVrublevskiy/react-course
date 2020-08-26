import React from 'react';
import style from './Profile.module.css'
import Posts from './Posts/Posts.js';

function Content(){
    return (
            <div className={style.content}>
                <div>
                    <img alt='' src='https://cdna.artstation.com/p/assets/images/images/003/745/580/large/antonis-karidis-wallpaper.jpg?1477040850' /> 
                </div>
                <div>
                    ava+description
                </div>
               <Posts />
            </div>
    )
}

export default Content;
