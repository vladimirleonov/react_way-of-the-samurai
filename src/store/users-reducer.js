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
/*        case 'FAKE': {
            return {...state}
        }*/
        case FOLLOW: {
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
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case CHANGE_BUTTON_CONDITION: {
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
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const toggleIsLoadingActionCreator = (value) => {
    return {
        type: IS_LOADING,
        isLoading: value
    }
}

export const changeButtonConditionActionCreator = (isChangingBtnCondition, userId) => {
    return {
        type: CHANGE_BUTTON_CONDITION,
        isChangingBtnCondition,
        userId
    }
}

//thunk creators

export const setUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsLoadingActionCreator(true));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsLoadingActionCreator(false));
        dispatch(setUsersActionCreator(data.items));
        dispatch(setTotalUsersCountActionCreator(data.totalCount));
    }
}

export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(changeButtonConditionActionCreator(true, userId));
        const data = await usersAPI.follow(userId)
        if (data.resultCode === 0) {
            dispatch(changeButtonConditionActionCreator(false, userId));
            dispatch(followActionCreator(userId));
        }
    }
}

export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(changeButtonConditionActionCreator(true, userId));
        const data = await usersAPI.unfollow(userId)
        if (data.resultCode === 0) {
            dispatch(changeButtonConditionActionCreator(false, userId));
            dispatch(unfollowActionCreator(userId));
        }
    }
}

export default usersReducer