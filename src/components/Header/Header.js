import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    debugger;
    return(
        <header className={s.header}>
            <img className={s.logo} src='/logo.jpg' alt="logo"/>
            <div className={s.login__wrapper}>
                {props.isAuth ? props.login : 'Log in'}
            </div>
        </header>
    )
}

export default Header;