const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';


const messagesReducer = (state, action) => {
    switch(action.type) {
        case 'ADD-MESSAGE':
        {
            state.messagesPage.messages.push(
                {
                    id: 4,
                    userName: "Me",
                    message: state.messagesPage.newMessageValue
                }
            );
            state.messagesPage.newMessageValue = '';
            break;
        }
        case 'CHANGE-NEW-MESSAGE-TEXT':{
            state.messagesPage.newMessageValue = action.newMessageValue;
            break;
        }
    }
    return state;
}

export default messagesReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeNewMessageTextActionCreator = (data) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessageValue: data
    }
}