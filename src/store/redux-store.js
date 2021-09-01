import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;