import React from 'react';
import style from './Profile.module.css'
import Posts from './Posts/Posts.js';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){
    return (
            <div className={style.content}>
                <ProfileInfo />
               <Posts messages={props.messages} />
            </div>
    )
}

export default Profile;
