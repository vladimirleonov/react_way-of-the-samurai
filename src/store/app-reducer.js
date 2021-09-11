import {getUserAuthDataThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                isInitialized: true
            }
        }
        default: {
            return state;
        }
    }
}

export default appReducer;

export const initializeAppActionCreator = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializeAppThunkCreator = () => (dispatch) => {
    const promise = dispatch(getUserAuthDataThunkCreator());
    debugger;
    Promise.all([promise])
        .then(() => {
            debugger;
            dispatch(initializeAppActionCreator());
        })
}