import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {changeNewMessageValue} from "../../store/state";

const Messages = (props) => {

    const newDialogItems = props.messagesState.dialogItems.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>;
    });

    const newMessages = props.messagesState.messages.map((item)=>{
        return <MessageItem userName={item.userName} message={item.message}/>;
    })

    const textInputRef = React.createRef();

    function onAddMessage() {
        /*const newMessageText = textInputRef.current.value;*/
        props.addMessage();
        textInputRef.current.value = props.messagesState.inputValue;
    }

    function onChangeInputValue () {
        /*const newMessageText = textInputRef.current.value;*/
        console.log(textInputRef.current.value);
        props.changeNewMessageValue(textInputRef.current.value);
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
                               onChange={onChangeInputValue}
                               type="text"
                               value={props.inputValue}/>
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