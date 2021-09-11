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

debugger;

class ProfileContainer extends React.Component {
    debugger;
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = this.props.myId;
            if(!userId) {
                this.props.history.push('./login');
            }
        }
        debugger;
        this.props.getUserStatus(userId);
        debugger;
        this.props.getUserProfile(userId);

        //axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        /*profileAPI.getUserProfile(userId)
            .then((data) => {
                debugger;
                console.log(data);
                this.props.setProfileInfo(data);
            })*/
    }
/*    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;
        console.log(this.props.myId);
        debugger;
        this.props.getUserStatus(this.props.myId);
        debugger;
        this.props.getUserProfile(this.props.myId);
    }*/

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
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        myId: state.auth.id,

        postData: state.profilePage.postData,
        newPostValue: state.profilePage.newPostValue
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