import React from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {
    return (
        <div>
            My post { props.hey }
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message='Hi, how are you?' amountLikes='15'/>
            <Post message="It's my first post" amountLikes='20'/>
        </div>
    );
}

export default MyPosts;