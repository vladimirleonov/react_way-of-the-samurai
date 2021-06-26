import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import store from "./store/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

function rerenderApp() {
    debugger;
    ReactDOM.render(
            <Router>
                <App appState={store.getState()}
                     dispatch={store.dispatch.bind(store)}/>
            </Router>,
        document.getElementById('root')
    );
}

rerenderApp();

store.subscribe(rerenderApp);




