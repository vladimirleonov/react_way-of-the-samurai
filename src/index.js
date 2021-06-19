import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import state from './store/state';
import {addPost, addMessage, changeNewPostValue, changeNewMessageValue} from './store/state';
import {subscribe} from "./store/state";
import App from "./App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function rerenderApp(state) {

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App appState={state}
                     addPost={addPost}
                     addMessage={addMessage}
                     changeNewPostValue={changeNewPostValue}
                     changeNewMessageValue={changeNewMessageValue}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderApp(state);

subscribe(rerenderApp)




