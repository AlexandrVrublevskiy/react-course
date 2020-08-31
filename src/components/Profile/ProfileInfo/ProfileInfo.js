import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt='' src='https://cdna.artstation.com/p/assets/images/images/003/745/580/large/antonis-karidis-wallpaper.jpg?1477040850' /> 
            </div>
            <div className={style.description_block}>
                ava+description
            </div>
        </div>
    ) 
}

export default ProfileInfo;