const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const defaultState = {
    dialogItems: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Mike"}
    ],
    messages: [
        {id: 1, userName: "Dimych", message: "sfs fsddgfd gdf gfdgdgdf gfghjkh ry"},
        {id: 2, userName: "Me", message: "sdfwre ertreyrt yrtyry yryrgf ddghgtj tuytyrd dfgsdg gg ryryrthf ryrtyrt"},
        {id: 3, userName: "Dimych", message: "qe wer werwrwr wgdghty jjyjju yujyukgf ertd ewdsgdgetw ete"}
    ],
    newMessageValue:''
}

const messagesReducer = (state=defaultState, action) => {
    switch(action.type) {
        case 'ADD-MESSAGE':
        {
            const newMessage =
                {
                    id: 4,
                    userName: "Me",
                    message: state.newMessageValue
                }
            state.newMessageValue = '';
            return {
                ...state,
                newMessageValue: '',
                messages: [...state.messages, newMessage]
            }
        }
        case 'CHANGE-NEW-MESSAGE-TEXT':{
            return {
                ...state,
                newMessageValue: action.newMessageValue
            }
        }
        default: {
            return state
        }
    }
}

export default messagesReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeNewMessageTextActionCreator = (data) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessageValue: data
    }
}