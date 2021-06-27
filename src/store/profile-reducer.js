const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch(action.type) {
        case 'ADD-POST': {
            state.profilePage.postData.push(
                {
                    id: 4,
                    text: state.profilePage.newPostValue,
                    likeCount: 3
                }
            );
            state.profilePage.newPostValue = '';
            break;
        }
        case 'CHANGE-NEW-POST-TEXT': {
            state.profilePage.newPostValue = action.newPostValue;
            break;
        }
    }
    return state;
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostTextActionCreator = (data) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPostValue: data
    }
}