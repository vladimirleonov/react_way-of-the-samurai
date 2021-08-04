import React from 'react'
import Users from './Users'
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator, toggleIsLoadingActionCreator} from "../../store/users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainerAPI extends React.Component {
    debugger;
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount () {
        debugger;
        this.props.toggleIsLoading(true);

        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                debugger;
                console.log(data);

                this.props.toggleIsLoading(false);

                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                debugger;
            })
    }

/*    componentWillUnmount() {
        this.props.setUsers([]);
        this.props.setTotalUsersCount(null);
    }*/

    setCurrentPage = (currentPage) => {
        debugger;

        this.props.toggleIsLoading(true);

        this.props.setCurrentPage(currentPage);
        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then((data) => {
                debugger;
                this.props.toggleIsLoading(false);
                this.props.setUsers(data.items);
            });
    }

    render () {

        return (
            <>
                {
                    this.props.isLoading ? <Preloader/>
                    : <Users users={this.props.users}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           setCurrentPage={this.setCurrentPage}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
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
        },
        toggleIsLoading(value) {
            debugger;
            dispatch(toggleIsLoadingActionCreator(value))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);


export default UsersContainer;
