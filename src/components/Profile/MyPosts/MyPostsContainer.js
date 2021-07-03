import React from 'react';
import MyPosts from "./MyPosts";

import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../store/profile-reducer";

const MyPostsContainer = (props) => {

    function onAddPost() {
        props.dispatch(addPostActionCreator());
    }

    function onChangeTextareaValue(newPostText) {
        debugger;
        props.dispatch(changeNewPostTextActionCreator(newPostText));
    }

    return (
        <MyPosts postData={props.postData} newPostValue={props.newPostValue} onAddPost={onAddPost} onChangeTextareaValue={onChangeTextareaValue}/>
    )
}

export default MyPostsContainer;