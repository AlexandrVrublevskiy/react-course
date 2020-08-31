import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css'


let Posts = () => {
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
                <Post message='Hello!' />
                <Post message='Hello world!'/>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )

}

export default Posts;