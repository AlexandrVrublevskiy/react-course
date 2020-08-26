import React from 'react';
import style from './Post.module.css'


let Post = (props) => {
    console.log(props.message)
    return (
            <div className={style.item}>
                <div>
                    <img alt='' src='http://www.airsoft.lv/forums/uploads/profile/photo-8367.png?_r=1462648661'></img>
                </div>
                {props.message}
            </div>   
    )

}

export default Post;