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
            debugger;
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        }
        default: {
            debugger;
            return state
        }
    }
}

export const setUserAuthDataActionCreator = (id, email, login) => {
    return {
        type: SET_USER_AUTH_DATA,
        id,
        email,
        login
    }
}

export default authReducer