import React from 'react';
import MyPosts from "./MyPosts";

import {addPostActionCreator} from "../../../store/profile-reducer";

import {connect} from "react-redux";

/*const MyPostsContainer = () => {
    return (
    <StoreContext.Consumer>
        { (store) => {

            const state = store.getState();

            /!*debugger;*!/

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
}*/

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostValue: state.profilePage.newPostValue
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost() {
            debugger;
            dispatch(addPostActionCreator());
        }
        /!*onChangeTextareaValue(text) {
            debugger;
            dispatch(changeNewPostTextActionCreator(text));
        }*!/
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {
    onAddPost: addPostActionCreator
})(MyPosts);

export default MyPostsContainer;