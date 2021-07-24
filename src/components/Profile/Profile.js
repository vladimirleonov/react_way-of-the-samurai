import React from 'react';

import s from './Profile.module.css';

import BigImg from './BigImg/BigImg';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return(
        <div className={s.profile}>
            <BigImg/>
            <ProfileInfoContainer/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;