import React from 'react'
import Users from './Users'
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator} from "../../store/users-reducer";
import * as axios from "axios";

class UsersContainerAPI extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                debugger;
                console.log(response.data);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
                debugger;
            })
    }

    setCurrentPage = (currentPage) => {
        debugger;
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                debugger;
                this.props.setUsers(response.data.items)
            });
    }

    render () {

        return (
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setCurrentPage={this.props.setCurrentPage}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            debugger;
            dispatch(followActionCreator(userId));
        },
        unfollow(userId) {
            debugger;
            dispatch(unfollowActionCreator(userId));
        },
        setUsers(users) {
            debugger;
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage(currentPage) {
            debugger;
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount(totalUsersCount) {
            debugger;
            dispatch(setTotalUsersCountActionCreator(totalUsersCount));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);


export default UsersContainer;
