import React from 'react';

import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../store/messages-reducer";

import Messages from "./Messages";


const MessagesContainer = (props) => {

    const textInputRef = React.createRef();

    function onAddMessage() {
        props.dispatch(addMessageActionCreator());
        /*props.dispatch({type: 'ADD-MESSAGE'});*/
    }

    function onChangeNewMessageValue (newMessageValue) {
        props.dispatch(changeNewMessageTextActionCreator(newMessageValue));
        /*props.dispatch({type: 'CHANGE-NEW-MESSAGE-VALUE', data: textInputRef.current.value});*/
    }

    return (
        <Messages messagesState={props.messagesState} onAddMessage={onAddMessage} onChangeNewMessageValue={onChangeNewMessageValue}/>
    )
}

export default MessagesContainer;