import React from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={`${s.item} ${s.active}`}>
            My post
            <div>
                New post
            </div>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>
    );
}

export default MyPosts;