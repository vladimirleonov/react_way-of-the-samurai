import React from 'react';
import rerenderApp from "../rerender";

const state = {
    profilePage: {
        postData: [
            { id: '1', text: 'fsreggx fgh fhgfhf', likeCount: '12'},
            { id: '2', text: 'gjgjgh fhg', likeCount: '9'},
            { id: '3', text: 'qwerty', likeCount: '11'}
        ]
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
        ]
    }
}

export const addPost = function(data) {
    state.profilePage.postData.push(
        {
            id: '4',
            text: data,
            likeCount: '3'
        }
    );
    rerenderApp(state, addPost, addMessage);
}

export function addMessage(data) {
    state.messagesPage.messages.push(
        {
            id: '4',
            userName: "Me",
            message: data
        }
    );
    rerenderApp(state, addPost, addMessage);
}

export default state;