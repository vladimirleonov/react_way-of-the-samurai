import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import store from "./store/redux-store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

function rerenderApp(state) {
    debugger;
    ReactDOM.render(
            <Router>
                <App appState={state}
                     dispatch={store.dispatch.bind(store)}/>
            </Router>,
        document.getElementById('root')
    );
}

rerenderApp(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderApp(state);
});




