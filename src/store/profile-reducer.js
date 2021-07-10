const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const defaultState = {
    postData: [
        { id: 1, text: 'fsreggx fgh fhgfhf', likeCount: 12},
        { id: 2, text: 'gjgjgh fhg', likeCount: 9},
        { id: 3, text: 'qwerty', likeCount: 11}
    ],
    newPostValue: ''
}

const profileReducer = (state=defaultState, action) => {
    switch(action.type) {
        case 'ADD-POST': {
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
        case 'CHANGE-NEW-POST-TEXT': {
            debugger;
            return {
                ...state,
                newPostValue: action.newPostValue
            }
        }
        default: {
            return state
        }
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostTextActionCreator = (data) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPostValue: data
    }
}