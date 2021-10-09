import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import store from "./store/redux-store";
import AppWithRouterAndProvider from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";

/*setInterval(() => {
    store.dispatch({type: 'FAKE'})
}, 1000)*/

ReactDOM.render(
        <AppWithRouterAndProvider/>,
    document.getElementById('root')
);






