import React from 'react';
import {addMessageActionCreator} from "../../store/messages-reducer";
import Messages from "./Messages";
import withAuthRedirect from '../../hoc/withAuthRedirect';

import {connect} from "react-redux";
import {getMessagesPage} from "../../store/messages-selector";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesState: getMessagesPage(state),
    }
}

/*const withAuthRedirectContainer = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, {
    onAddMessage: addMessageActionCreator
})(withAuthRedirectContainer);

export default MessagesContainer;*/

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        onAddMessage: addMessageActionCreator
    })
)(Messages);











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

