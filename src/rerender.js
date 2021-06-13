import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";

export default function rerenderApp(state, addPost, addMessage) {

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App appState={state} addPost={addPost} addMessage={addMessage}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}