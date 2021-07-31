import React from 'react';

import Header from './Header';
import {connect} from "react-redux";

import * as axios from 'axios';
import {setUserAuthDataActionCreator} from "../../store/auth";

class HeaderContainerAPI extends React.Component{
    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            })
            .then((response) => {
                debugger;
                if(response.data.resultCode === 0) {
                    debugger;
                    const {id, email, login} = response.data.data;
                    debugger;
                    this.props.setUserAuthData(id, email, login);
                    debugger;
                }
            })
    }

    render () {
        debugger;
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        setUserAuthData (id, email, login) {
            dispatch(setUserAuthDataActionCreator(id, email, login))
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI);

export default HeaderContainer;
