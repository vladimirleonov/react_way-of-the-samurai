import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {setProfileInfoActionCreator, toggleIsLoadingActionCreator} from "../../../store/profile-reducer";
import Preloader from "../../common/Preloader";
import * as axios from 'axios';
import {connect} from "react-redux";


class ProfileInfoContainerAPI extends React.Component{
    componentDidMount () {
        debugger;
        this.props.toggleIsLoading(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((response) => {
                console.log(this.props.isLoading);
                debugger;
                this.props.toggleIsLoading(false);
                console.log(response.data);
                this.props.setProfileInfo(response.data);
            })
    }
    componentWillUnmount() {
        //this.props.setProfileInfo(null);
    }

    render () {
        return (
            <>
                {this.props.isLoading ? <Preloader/> :
                    <ProfileInfo {...this.props.profileInfo}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isLoading: state.profilePage.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsLoading (isLoading) {
            dispatch(toggleIsLoadingActionCreator(isLoading))
        },
        setProfileInfo (profileInfo) {
            dispatch(setProfileInfoActionCreator(profileInfo))
        }
    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainerAPI);

export default ProfileInfoContainer;