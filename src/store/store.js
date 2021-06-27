import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, text: 'fsreggx fgh fhgfhf', likeCount: 12},
                { id: 2, text: 'gjgjgh fhg', likeCount: 9},
                { id: 3, text: 'qwerty', likeCount: 11}
            ],
            newPostValue: ''
        },
        messagesPage: {
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
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        profileReducer(this._state, action);
        messagesReducer(this._state, action);

        this._callSubscriber(store);
    },

    _callSubscriber () { },

    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;

/*
const state = {
    profilePage: {
        postData: [
            { id: '1', text: 'fsreggx fgh fhgfhf', likeCount: '12'},
            { id: '2', text: 'gjgjgh fhg', likeCount: '9'},
            { id: '3', text: 'qwerty', likeCount: '11'}
        ],
        textareaValue: ''
    },
    messagesPage: {
        dialogItems: [
            {id: '1', name: "Dimych"},
            {id: '2', name: "Mike"}
        ],
        messages: [
            {id: '1', userName: "Dimych", message: "sfs fsddgfd gdf gfdgdgdf gfghjkh ry"},
            {id: '2', userName: "Me", message: "sdfwre ertreyrt yrtyry yryrgf ddghgtj tuytyrd dfgsdg gg ryryrthf ryrtyrt"},
            {id: '3', userName: "Dimych", message: "qe wer werwrwr wgdghty jjyjju yujyukgf ertd ewdsgdgetw ete"}
        ],
        inputValue:''
    }
}

export const addPost = function() {
    state.profilePage.postData.push(
        {
            id: '4',
            text: state.profilePage.textareaValue,
            likeCount: '3'
        }
    );
    state.profilePage.textareaValue = '';
    rerenderApp(state);
}

export function addMessage() {
    state.messagesPage.messages.push(
        {
            id: '4',
            userName: "Me",
            message: state.messagesPage.inputValue
        }
    );
    state.messagesPage.inputValue = '';
    rerenderApp(state);
}

export function changeNewPostValue(data) {
    state.profilePage.textareaValue = data;
    rerenderApp(state);
}

export function changeNewMessageValue(data) {
    state.messagesPage.inputValue = data;
    rerenderApp(state);
}



let rerenderApp = function () { }

export const subscribe = (observer) => {
    rerenderApp = observer;
}



export default state;*/
