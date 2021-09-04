import React from 'react';

import Header from './Header';
import {connect} from "react-redux";

import * as axios from 'axios';
import {logoutThunkCreator, setUserAuthDataActionCreator} from "../../store/auth";

import {getUserAuthDataThunkCreator} from "../../store/auth";

import {authMeAPI} from "../../api/api";
import {compose} from "redux";

class HeaderContainerAPI extends React.Component{
    componentDidMount() {
        debugger;
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            })*/
        this.props.getUserAuthData();
        /*authMeAPI.getAuthData()
            .then((data) => {
                debugger;
                if(data.resultCode === 0) {
                    debugger;
                    const {id, email, login} = data.data;
                    debugger;
                    this.props.setUserAuthData(id, email, login);
                    debugger;
                }
            })*/
    }

    render () {
        debugger;
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state) => {
    //debugger;
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

/*const mapDispatchToProps = (dispatch) => {
    //debugger;
    return {
        setUserAuthData (id, email, login) {
            dispatch(setUserAuthDataActionCreator(id, email, login))
        }
    }
}*/

const HeaderContainer = compose(
    connect(mapStateToProps, {
        getUserAuthData: getUserAuthDataThunkCreator,
        logout: logoutThunkCreator
    })
)(HeaderContainerAPI);

export default HeaderContainer;

/*const HeaderContainer = connect(mapStateToProps, {getUserAuthData: getUserAuthDataThunkCreator})(HeaderContainerAPI);

export default HeaderContainer;*/
