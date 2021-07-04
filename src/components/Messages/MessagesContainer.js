import React from 'react';

import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../store/messages-reducer";

import Messages from "./Messages";
import StoreContext from "../../StoreContext";


const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                const state = store.getState();

                /*debugger;*/
                const textInputRef = React.createRef();

                function onAddMessage() {
                    store.dispatch(addMessageActionCreator());
                    /*props.dispatch({type: 'ADD-MESSAGE'});*/
                }

                function onChangeNewMessageValue (newMessageValue) {
                    store.dispatch(changeNewMessageTextActionCreator(newMessageValue));
                    /*props.dispatch({type: 'CHANGE-NEW-MESSAGE-VALUE', data: textInputRef.current.value});*/
                }

                return (
                    <Messages messagesState={state.messagesPage} onAddMessage={onAddMessage} onChangeNewMessageValue={onChangeNewMessageValue}/>
                )
            }
            }
    </StoreContext.Consumer>
    )
}

export default MessagesContainer;