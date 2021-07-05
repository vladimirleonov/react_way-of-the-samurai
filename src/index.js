import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import store from "./store/redux-store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";

function rerenderApp() {
    debugger;
    ReactDOM.render(
            <Router>
                <Provider value={store}>
                    <App />
                </Provider>
            </Router>,
        document.getElementById('root')
    );
}

rerenderApp(store.getState());

store.subscribe(()=>{
    rerenderApp();
});




