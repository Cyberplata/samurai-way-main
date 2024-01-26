import React from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message='Hi, how are you?'/>
            <Post message="It's my first post"/>
        </div>
    );
}

export default MyPosts;