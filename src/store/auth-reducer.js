import {authMeAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import actions from "redux-form/lib/actions";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            //debugger;
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        }
        default: {
            //debugger;
            return state
        }
    }
}

export const setUserAuthDataActionCreator = (id, email, login, isAuth = false) => {
    return {
        type: SET_USER_AUTH_DATA,
        id,
        email,
        login,
        isAuth
    }
}

export const getUserAuthDataThunkCreator = () => {
    return (dispatch) => {
        authMeAPI.getAuthData()
            .then((data) => {
                debugger;
                if(data.resultCode === 0) {
                    debugger;
                    const {id, email, login} = data.data;
                    debugger;
                    dispatch(setUserAuthDataActionCreator(id, email, login, true));
                    debugger;
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authMeAPI.logout()
            .then((data) => {
                if (data.resultCode === 0) {
                    alert('loged out');
                    dispatch(setUserAuthDataActionCreator(null, null, null, false));
                }
            })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authMeAPI.login (email, password, rememberMe)
            .then((data) => {
                debugger;
                if(data.resultCode === 0) {
                    debugger;
                    alert('loged in');
                    dispatch(getUserAuthDataThunkCreator());
                } else {
                    dispatch(stopSubmit('login', {_error: data.messages[0]}))
                }
            })
    }
}

export default authReducer