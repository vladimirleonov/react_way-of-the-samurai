import {authMeAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        }
        default: {
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
    return async (dispatch) => {
        const data = await authMeAPI.getAuthData();
        if(data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setUserAuthDataActionCreator(id, email, login, true));
        }
    }
}

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        const data = await authMeAPI.logout()
        if (data.resultCode === 0) {
            alert('loged out');
            dispatch(setUserAuthDataActionCreator(null, null, null, false));
        }
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await authMeAPI.login (email, password, rememberMe)
        if(data.resultCode === 0) {
            alert('loged in');
            dispatch(getUserAuthDataThunkCreator());
        } else {
            dispatch(stopSubmit('login', {_error: data.messages[0]}))
        }

    }
}

export default authReducer