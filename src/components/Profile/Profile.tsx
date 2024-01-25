import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://media.istockphoto.com/id/1283376667/photo/autumn-lake-panorama.jpg?s=612x612&w=0&k=20&c=uAWmhFJTwBxCmiQwIwdMkWzjdfHgmicUqp5OauzegvM="
                    alt=""/>
            </div>
            <div className={`${s.item} ${s.focus}`}>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;