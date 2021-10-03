import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from "./NewPostForm/NewPostForm";

const MyPosts = (props) => {
    const newPostData = props.postData.map((item) => {
        return <Post key={item.id} text={item.text} likeCount={item.likeCount}/>
    })

    const onSubmit = (values) => {
        const { newPostValue } = values;
        if(newPostValue) {
            props.onAddPost(newPostValue);
        }
    }

    return (
        <div className={s.my__posts}>
            <div className={s.header}>My posts</div>
            <NewPostForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {newPostData}
            </div>
        </div>
    )
}

export default MyPosts;