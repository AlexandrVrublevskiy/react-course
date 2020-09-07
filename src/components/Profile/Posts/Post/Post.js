import React from 'react';
import style from './Post.module.css'


let Post = (props) => {
    return (
            <div className={style.item}>
                <div>
                    <img alt='' src='http://www.airsoft.lv/forums/uploads/profile/photo-8367.png?_r=1462648661'></img>
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                   Likes: {props.likesCount}
                </div>
            </div>   
    )

}

export default Post;