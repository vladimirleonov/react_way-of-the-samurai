import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const IS_LOADING = 'IS-LOADING';
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS';

const defaultState = {
    postData: [
        { id: 1, text: 'fsreggx fgh fhgfhf', likeCount: 12},
        { id: 2, text: 'gjgjgh fhg', likeCount: 9},
        { id: 3, text: 'qwerty', likeCount: 11}
    ],
    /*newPostValue: '',*/
    profileInfo: {
        fullName: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null
        },
        photos: {
            small: null,
            large: null
        }
    },
    status: 'empty'
}

const profileReducer = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const newPost =
                {
                    id: 4,
                    text: action.newPostValue,
                    likeCount: 3
                }
            state.newPostValue = '';
            return {
                ...state,
                newPostValue: '',
                postData: [...state.postData, newPost]
            }
        }
        /*case CHANGE_NEW_POST_TEXT: {
            debugger;
            return {
                ...state,
                newPostValue: action.newPostValue
            }
        }*/
        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    fullName: action.profileInfo.fullName,
                    lookingForAJob: action.profileInfo.lookingForAJob,
                    lookingForAJobDescription: action.profileInfo.lookingForAJobDescription,
                    contacts: {
                        ...state.profileInfo.contacts,
                        github: action.profileInfo.contacts.github,
                        vk: action.profileInfo.contacts.vk,
                        facebook: action.profileInfo.contacts.facebook,
                        instagram: action.profileInfo.contacts.instagram,
                        twitter: action.profileInfo.contacts.twitter,
                        website: action.profileInfo.contacts.website,
                        youtube: action.profileInfo.contacts.youtube,
                        mainLink: action.profileInfo.contacts.mainLink
                    },
                    photos: {
                        ...state.profileInfo.photos,
                        large: action.profileInfo.photos.large,
                        small: action.profileInfo.photos.small
                    }
                }
            }
        }
/*        case IS_LOADING: {
            debugger;
            return {
                ...state,
                isLoading: action.isLoading
            }
        }*/
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state
        }
    }
}

export default profileReducer;

// actions

export const addPostActionCreator = (newPostValue) => ({
    type: ADD_POST,
    newPostValue
});
/*export const changeNewPostTextActionCreator = (data) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPostValue: data
    }
}*/

export const setProfileInfoActionCreator = (profileInfo) => {
    return {
        type: SET_PROFILE_INFO,
        profileInfo
    }
}

/*
export const toggleIsLoadingActionCreator = (isLoading) => {
    debugger;
    return {
        type: IS_LOADING,
        isLoading
    }
}*/

export const updateUserStatusActionCreator = (status) => {
    return {
        type: UPDATE_USER_STATUS,
        status
    }
}


//thunks

export const getUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getUserProfile(userId)
        dispatch(setProfileInfoActionCreator(data));
    }
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    const data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(updateUserStatusActionCreator(status));
    }
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    const status = await profileAPI.getUserStatus(userId)
    dispatch(updateUserStatusActionCreator(status));
}