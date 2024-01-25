import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="https://media.istockphoto.com/id/1283376667/photo/autumn-lake-panorama.jpg?s=612x612&w=0&k=20&c=uAWmhFJTwBxCmiQwIwdMkWzjdfHgmicUqp5OauzegvM="
                alt=""/>
        </div>
        <div className={`${s.item} ${s.focus}`}>
            ava + description
        </div>
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
    </div>
}

export default Profile;