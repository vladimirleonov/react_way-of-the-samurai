import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from './users-reducer';

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersPage: usersReducer
    }
)

let store = createStore(reducers);

export default store;