import logo from './logo.svg';
import s from './App.module.css';

import HeaderContainer from "./components/Header/HeaderContainer";
/*import Nav from "./components/Nav/Nav";*/
import NavContainer from "./components/Nav/NavContainer";
import Profile from "./components/Profile/Profile";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Users from "./components/Users/Users";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StoreContext from "./StoreContext";

function App() {
  return (
    <div className={s.app}>
      <HeaderContainer/>
      <NavContainer/>
        <div className={s.content}>
            {/*<Route exact path='/'><Profile /></Route>*/}
            <Route path='/profile/:userId'><ProfileContainer /></Route>
            <Route path='/messages'><MessagesContainer /></Route>
            <Route path='/news'> <News/> </Route>
            <Route path='/music'> <Music/> </Route>
            <Route path='/users'> <UsersContainer/> </Route>
            <Route path='/settings'> <Settings/> </Route>
            <Route path='/login'> <Login/> </Route>
        </div>
    </div>
  );
}

export default App;
