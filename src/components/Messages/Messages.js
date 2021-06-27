import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../store/messages-reducer";


const Messages = (props) => {
    const newDialogItems = props.messagesState.dialogItems.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>;
    });

    const newMessages = props.messagesState.messages.map((item)=>{
        return <MessageItem userName={item.userName} message={item.message}/>;
    })

    const textInputRef = React.createRef();

    function onAddMessage() {
        props.dispatch(addMessageActionCreator());
        /*props.dispatch({type: 'ADD-MESSAGE'});*/
    }

    function onChangeNewMessageValue () {
        props.dispatch(changeNewMessageTextActionCreator(textInputRef.current.value));
        /*props.dispatch({type: 'CHANGE-NEW-MESSAGE-VALUE', data: textInputRef.current.value});*/
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
                    <form action="#">
                        <input ref={textInputRef}
                               onChange={onChangeNewMessageValue}
                               type="text"
                               value={props.messagesState.newMessageValue}/>
                        <button onClick={onAddMessage} type='button'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Messages;