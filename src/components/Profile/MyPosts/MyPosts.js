import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const newPostData = props.postData.map((item) => {
        debugger;
        return <Post text={item.text} likeCount={item.likeCount}/>
    })

    const textareaRef = React.createRef();

    function onAddPost() {
        debugger;
        props.dispatch({type: 'ADD-POST'});
    }

    function onChangeTextareaValue() {
        debugger;
        props.dispatch({type: 'CHANGE-NEW-POST-VALUE', data: textareaRef.current.value});
    }

    return (
        <div className={s.my__posts}>
            <div className={s.header}>My posts</div>
            <form action="#" className={s.new__post}>
                <textarea ref={textareaRef} onChange={onChangeTextareaValue} value={props.postValue} name="news" id="33" cols="30" rows="3"></textarea>
                <button className={s.btn} onClick={onAddPost} type="button">Send</button>
            </form>
            <div className={s.posts}>
                {newPostData}
            </div>
        </div>
    )
}

export default MyPosts;