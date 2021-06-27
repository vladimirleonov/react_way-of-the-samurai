import logo from './logo.svg';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  return (
    <div className={s.app}>
      <Header/>
      <Nav/>
        <div className={s.content}>
            <Route exact path='/'>
                <Profile profileState={props.appState.profilePage}
                         dispatch={props.dispatch}/>
            </Route>
            <Route path='/messages'>
                <Messages messagesState={props.appState.messagesPage}
                          dispatch={props.dispatch}/>
            </Route>
            <Route path='/news'> <News/> </Route>
            <Route path='/music'> <Music/> </Route>
            <Route path='/settings'> <Settings/> </Route>
        </div>
    </div>
  );
}

export default App;
