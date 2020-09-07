import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css'

let Posts = (props) => {
    let messagesElements = props.messages.map((item, i) => <Post message={item.massage} likesCount={item.likesCount}  key={i} />)
    return (
        <div className={style.new_post}>
            <div>
                <h3>
                    <div>New post</div>
                </h3>   
                <input></input>
                <div>
                    <button>Send</button>
                    <button>Cancel</button>
                </div>
            </div>
            <div className={style.posts}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Posts;