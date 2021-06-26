import React from 'react';

import s from './Profile.module.css';

import BigImg from './BigImg/BigImg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    debugger;
    return(
        <div className={s.profile}>
            <BigImg/>
            <ProfileInfo/>
            <MyPosts postData={props.profileState.postData}
                     newPostValue={props.profileState.newPostValue}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;