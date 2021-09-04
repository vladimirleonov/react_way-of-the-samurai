import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    //debugger;

    const onLogout = () => {
        props.logout();
    }

    return(
        <header className={s.header}>
            <img className={s.logo} src='/logo.jpg' alt="logo"/>
            <div className={s.info__wrapper}>
                {props.isAuth ?
                    <div>
                        <div className={s.userName__wrapper}>
                            {props.login}
                        </div>
                        <div className={s.logout__wrapper}>
                            <button
                                onClick={onLogout}
                                className={s.logout__btn}
                                type='button'
                            >
                                log out
                            </button>
                        </div>
                    </div>
                    :
                    <NavLink to='/login' className={s.login__btn}>
                        Log in
                    </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;