import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import store from "./store/redux-store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import StoreContext from "./StoreContext";

function rerenderApp(state) {
    debugger;
    ReactDOM.render(
            <Router>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </Router>,
        document.getElementById('root')
    );
}

rerenderApp(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderApp(state);
});




