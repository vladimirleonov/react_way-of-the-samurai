import React from 'react';
import s from './App.module.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Users from "./components/Users/Users";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";

import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";

import StoreContext from "./StoreContext";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader";
import {initializeAppThunkCreator} from "./store/app-reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator();
    }

    render () {
        return (
            <>
            {
                !this.props.isInitialized ? <Preloader/> :
                    <div className={s.app}>
                        <HeaderContainer/>
                        <Nav/>
                        <div className={s.content}>
                            {/*<Route exact path='/'><Profile /></Route>*/}
                            <Route path='/profile/:userId?'><ProfileContainer /></Route>
                            <Route path='/messages'><MessagesContainer /></Route>
                            <Route path='/news'> <News/> </Route>
                            <Route path='/music'> <Music/> </Route>
                            <Route path='/users'> <UsersContainer/> </Route>
                            <Route path='/settings'> <Settings/> </Route>
                            <Route path='/login'> <Login/> </Route>
                        </div>
                    </div>
            }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        initializeAppThunkCreator
    })
)(App);
