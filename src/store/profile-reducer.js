import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const IS_LOADING = 'IS-LOADING';

const defaultState = {
    postData: [
        { id: 1, text: 'fsreggx fgh fhgfhf', likeCount: 12},
        { id: 2, text: 'gjgjgh fhg', likeCount: 9},
        { id: 3, text: 'qwerty', likeCount: 11}
    ],
    newPostValue: '',
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
    //isLoading: false
}

const profileReducer = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const newPost =
                {
                    id: 4,
                    text: state.newPostValue,
                    likeCount: 3
                }
            state.newPostValue = '';
            return {
                ...state,
                newPostValue: '',
                postData: [...state.postData, newPost]
            }
        }
        case CHANGE_NEW_POST_TEXT: {
            debugger;
            return {
                ...state,
                newPostValue: action.newPostValue
            }
        }
        case SET_PROFILE_INFO: {
            debugger;
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
        default: {
            return state
        }
    }
}

export default profileReducer;

// actions

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostTextActionCreator = (data) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPostValue: data
    }
}

export const setProfileInfoActionCreator = (profileInfo) => {
    debugger;
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


//thunks

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then((data) => {
                debugger;
                console.log(data);
                dispatch(setProfileInfoActionCreator(data));
            })
    }
}