import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css'

let massages = [
    {massage: 'Hello!', id: 1},
    {massage: 'Hello world!', id: 2},
    {massage: 'Hello user!', id: 3}
]

let massagesElements = massages.map((item, i) => <Post message={item.massage} key={i} />)

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
                {massagesElements}
            </div>
        </div>
    )

}

export default Posts;