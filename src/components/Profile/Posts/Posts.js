import React from 'react';
import Post from './Post/Post';


let Posts = () => {
    return (
        <div className='posts'>
            <div>
                <div>New post</div>
                <input></input>
                <div>
                    <button>Send</button>
                    <button>Cancel</button>
                </div>
            </div>
           <Post message='Hello!' />
           <Post message='Hello world!'/>
           <Post />
           <Post />
           <Post />
        </div>
    )

}

export default Posts;