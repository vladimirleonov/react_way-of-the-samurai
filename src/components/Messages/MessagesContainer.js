import React from 'react';

import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../store/messages-reducer";

import Messages from "./Messages";

import {connect} from "react-redux";


/*const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                const state = store.getState();

                /!*debugger;*!/
                const textInputRef = React.createRef();

                function onAddMessage() {
                    store.dispatch(addMessageActionCreator());
                    /!*props.dispatch({type: 'ADD-MESSAGE'});*!/
                }

                function onChangeNewMessageValue (newMessageValue) {
                    store.dispatch(changeNewMessageTextActionCreator(newMessageValue));
                    /!*props.dispatch({type: 'CHANGE-NEW-MESSAGE-VALUE', data: textInputRef.current.value});*!/
                }

                return (
                    <Messages messagesState={state.messagesPage} onAddMessage={onAddMessage} onChangeNewMessageValue={onChangeNewMessageValue}/>
                )
            }
            }
    </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        messagesState: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage() {
            dispatch(addMessageActionCreator());
        },
        onChangeNewMessageValue(text) {
            dispatch(changeNewMessageTextActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;