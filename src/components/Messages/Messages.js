import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {
    debugger;
    const newDialogItems = props.messagesState.dialogItems.map((item) => {
        debugger;
        return <DialogItem name={item.name} id={item.id}/>;
    });

    const newMessages = props.messagesState.messages.map((item)=>{
        debugger;
        return <MessageItem userName={item.userName} message={item.message}/>;
    })

    const textInputRef = React.createRef();

    function onAddMessage() {
        debugger;
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    function onChangeNewMessageValue () {
        debugger;
        props.dispatch({type: 'CHANGE-NEW-MESSAGE-VALUE', data: textInputRef.current.value});
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