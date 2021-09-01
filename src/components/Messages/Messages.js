import React from 'react';
import { Redirect } from "react-router-dom";
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import NewMessageForm from "./NewMessageForm/NewMessageForm";


const Messages = (props) => {
    debugger;
    const newDialogItems = props.messagesState.dialogItems.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>;
    });

    const newMessages = props.messagesState.messages.map((item)=>{
        return <MessageItem userName={item.userName} message={item.message}/>;
    })

    function onSubmit(values) {
        const { newMessageValue } = values;
        if (newMessageValue) {
            console.log(newMessageValue);
            props.onAddMessage(newMessageValue);
        }
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {newDialogItems}
            </ul>
            <div className={s.messages}>
                <div className={s.wrapper}>
                    {newMessages}
                </div>
                <div className={s.newMessage}>
                    <NewMessageForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Messages;