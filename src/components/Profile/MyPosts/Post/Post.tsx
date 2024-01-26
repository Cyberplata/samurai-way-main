import React from 'react';
import './Post.module.css';
import s from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/014/194/222/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
                alt=""/>
            { props.message }
            <div>
                <span>like { props.amountLikes }</span>
            </div>
        </div>
    );
}

export default Post;