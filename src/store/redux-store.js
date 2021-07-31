import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth";

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

let store = createStore(reducers);

export default store;