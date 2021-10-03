import React from 'react';

import Profile from './Profile'
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../store/profile-reducer";
import {withRouter} from "react-router-dom";
import {getNewPostValue, getPostData, getProfileInfo, getStatus} from "../../store/profile-selector";
import {getId} from "../../store/auth-selector";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = this.props.myId;
            if(!userId) {
                this.props.history.push('./login');
            }
        }
        this.props.getUserStatus(userId);
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile profileInfo = {this.props.profileInfo}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}

                     postData = {this.props.postData}
                     newPostValue = {this.props.newPostValue}
                     onAddPost = {this.props.onAddPost}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: getProfileInfo(state),
        status: getStatus(state),
        myId: getId(state),
        postData: getPostData(state),
        newPostValue: getNewPostValue(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,
        {
            getUserProfile: getUserProfileThunkCreator,
            updateUserStatus: updateUserStatusThunkCreator,
            getUserStatus: getUserStatusThunkCreator,

            onAddPost: addPostActionCreator
        })
)(ProfileContainer);