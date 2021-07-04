import React from 'react';
import MyPosts from "./MyPosts";

import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../store/profile-reducer";

import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
    <StoreContext.Consumer>
        { (store) => {

            const state = store.getState();

            /*debugger;*/

            function onAddPost() {
                store.dispatch(addPostActionCreator());
            }

            function onChangeTextareaValue(newPostText) {
                debugger;
                store.dispatch(changeNewPostTextActionCreator(newPostText));
            }

            return (
                <MyPosts postData={state.profilePage.postData} newPostValue={state.profilePage.newPostValue} onAddPost={onAddPost} onChangeTextareaValue={onChangeTextareaValue}/>
            )
        }
        }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer;