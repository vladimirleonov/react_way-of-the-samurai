import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import store from "./store/redux-store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>,
    document.getElementById('root')
);






