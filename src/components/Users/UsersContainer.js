import React from 'react'
import Users from './Users'
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        /*usersPage: state.usersPage,*/
        userName: state.usersPage.userName,
        subscription: state.usersPage.subscription,
        status: state.usersPage.status,
        country: state.usersPage.status,
        city: state.usersPage.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
