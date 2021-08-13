import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_LOADING = 'IS-LOADING';
const CHANGE_BUTTON_CONDITION = 'CHANGE-BUTTON-CONDITION';

const initialState = {
    users: [
        /*{id: 1, userName: 'Dmitry K.', subscription: false, status: "I'm looking for a job", location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, userName: 'Svetlana D.', subscription: false, status: "I'm ready to help you", location: {country: 'Russia', city:'Moscow'}},
        {id:3, userName: 'Sergei S.', subscription: false, status: "I'm like football", location: {country: 'Ukrane', city: 'Kiev'}}*/
    ],
    totalUsersCount: null,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    arrayUsersWithDisabledId: []
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            debugger;
            return {
                ...state,
                users: state.users.map(u =>
                    {
                        if(u.id === action.userId) {
                            return {
                                ...u,
                                followed: true
                            }
                        } else {
                            return u;
                        }
                    }
                )
            }
        }
        case UNFOLLOW: {
            debugger;
            return {
                ...state,
                users: state.users.map (u => {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                           followed: false
                        }
                    } else {
                        return u;
                    }
                })
            }
        }
        case SET_USERS: {
            debugger;
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            debugger;
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            debugger;
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case IS_LOADING: {
            debugger;
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case CHANGE_BUTTON_CONDITION: {
            debugger;
            return {
                ...state,
                arrayUsersWithDisabledId:
                    action.isChangingBtnCondition
                        ? [...state.arrayUsersWithDisabledId, action.userId]
                        : state.arrayUsersWithDisabledId.filter(elem => elem!=action.userId)
            }
        }
        default: {
            return state
        }
    }
}

//actions

export const followActionCreator = (userId) => {
    debugger;
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowActionCreator = (userId) => {
    debugger;
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    debugger;
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    debugger;
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    debugger;
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const toggleIsLoadingActionCreator = (value) => {
    debugger;
    return {
        type: IS_LOADING,
        isLoading: value
    }
}

export const changeButtonConditionActionCreator = (isChangingBtnCondition, userId) => {
    debugger;
    return {
        type: CHANGE_BUTTON_CONDITION,
        isChangingBtnCondition,
        userId
    }
}

//thunk creators

export const setUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsLoadingActionCreator(true));

        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                debugger;
                console.log(data);

                dispatch(toggleIsLoadingActionCreator(false));
                debugger;
                dispatch(setUsersActionCreator(data.items));
                dispatch(setTotalUsersCountActionCreator(data.totalCount));
                debugger;
            })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(changeButtonConditionActionCreator(true, userId));
        usersAPI.follow(userId)
            .then((data) => {
                debugger;
                if (data.resultCode === 0) {
                    debugger;
                    dispatch(changeButtonConditionActionCreator(false, userId));
                    debugger;
                    dispatch(followActionCreator(userId));
                }
            })
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(changeButtonConditionActionCreator(true, userId));
        usersAPI.unfollow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(changeButtonConditionActionCreator(false, props.id));
                    debugger;
                    dispatch(unfollowActionCreator(userId));
                }
            })
    }
}

export default usersReducer