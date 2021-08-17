import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {getUserProfileThunkCreator, setProfileInfoActionCreator} from "../../../store/profile-reducer";
import Preloader from "../../common/Preloader";
import * as axios from 'axios';
import {connect} from "react-redux";
import {compose} from 'redux';
import { withRouter } from "react-router-dom";

import {profileAPI} from "../../../api/api";


/*class ProfileInfoContainerAPI extends React.Component{*/
class ProfileInfoContainerAPI extends React.Component{
    componentDidMount () {
        debugger;
        const userId = this.props.match.params.userId;

        this.props.getUserProfile(userId);

        //axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        /*profileAPI.getUserProfile(userId)
            .then((data) => {
                debugger;
                console.log(data);
                this.props.setProfileInfo(data);
            })*/
    }

    render () {
        return (
            <ProfileInfo {...this.props.profileInfo}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isLoading: state.profilePage.isLoading
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        setProfileInfo (profileInfo) {
            dispatch(setProfileInfoActionCreator(profileInfo))
        }
    }
}*/
const ProfileContainer = compose(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator}),
    withRouter
)(ProfileInfoContainerAPI)

export default ProfileContainer;

/*
const withUrlDataProfileInfoContainer = withRouter(ProfileInfoContainerAPI)

const ProfileInfoContainer = connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(withUrlDataProfileInfoContainer);

export default ProfileInfoContainer;*/
