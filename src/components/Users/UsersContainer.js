import React from 'react'
import Users from './Users'
import {connect} from "react-redux";
import {compose} from 'redux';
import {setCurrentPageActionCreator} from "../../store/users-reducer";
import {setUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from '../../store/users-reducer'
import Preloader from "../common/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainerAPI extends React.Component {
    debugger;
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount () {
        debugger;
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    setCurrentPage = (currentPage) => {
        debugger;

        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);

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
                           changeButtonCondition={this.props.changeButtonCondition}
                           arrayUsersWithDisabledId={this.props.arrayUsersWithDisabledId}
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
        isLoading: state.usersPage.isLoading,
        arrayUsersWithDisabledId: state.usersPage.arrayUsersWithDisabledId
    }
}

const UsersContainer =  compose(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageActionCreator,
        getUsers: setUsersThunkCreator,
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator
    })
)(UsersContainerAPI);

export default UsersContainer;

/*const withAuthRedirectContainer = withAuthRedirect(UsersContainerAPI);

const UsersContainer = connect(mapStateToProps, {
    setCurrentPage: setCurrentPageActionCreator,
    getUsers: setUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator
})(withAuthRedirectContainer);

export default UsersContainer;*/















/*const mapDispatchToProps = (dispatch) => {
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
        },
        changeButtonCondition(isChangingBtnCondition, userId) {
            dispatch(changeButtonConditionActionCreator(isChangingBtnCondition, userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);


export default UsersContainer;*/
