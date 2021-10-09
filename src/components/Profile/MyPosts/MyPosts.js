import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from "./NewPostForm/NewPostForm";

window.props = [];

class MyPosts extends React.PureComponent {
    newPostData = this.props.postData.map((item) => {
        return <Post key={item.id} text={item.text} likeCount={item.likeCount}/>
    })

    onSubmit = (values) => {
        const { newPostValue } = values;
        if(newPostValue) {
            this.props.onAddPost(newPostValue);
        }
    }

  /*  shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props  ;
        // return false;
    }*/

    render () {
        console.log(this.props);
        {window.props.push(this.props)}

        return (
            <div className={s.my__posts}>
                <div className={s.header}>My posts</div>
                <NewPostForm onSubmit={this.onSubmit}/>
                <div className={s.posts}>
                    {this.newPostData}
                </div>
            </div>
        )
    }
}

export default MyPosts;