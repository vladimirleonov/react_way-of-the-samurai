import React from 'react';

import Header from './Header';
import {connect} from "react-redux";

import {logoutThunkCreator} from "../../store/auth-reducer";

import {getUserAuthDataThunkCreator} from "../../store/auth-reducer";
import {compose} from "redux";
import {getIsAuth, getLogin} from "../../store/auth-selector";

class HeaderContainerAPI extends React.Component{
    render () {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

const HeaderContainer = compose(
    connect(mapStateToProps, {
        getUserAuthData: getUserAuthDataThunkCreator,
        logout: logoutThunkCreator
    })
)(HeaderContainerAPI);

export default HeaderContainer;
