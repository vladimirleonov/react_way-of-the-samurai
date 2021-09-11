import React from 'react';

import s from './Profile.module.css';

import BigImg from './BigImg/BigImg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    debugger;
    return(
        <div className={s.profile}>
            {/*<BigImg/>*/}
            <ProfileInfo {...props.profileInfo}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}/>

            <MyPosts postData = {props.postData}
                     newPostValue = {props.newPostValue}
                     onAddPost = {props.onAddPost}/>
        </div>
    )
}

export default Profile;