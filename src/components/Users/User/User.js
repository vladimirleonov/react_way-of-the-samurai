import React from 'react';
import s from './User.module.css';
import ava1 from './ava1.jpg'

const User = (props) => {
    return (
        <div className={s.user}>
            <div className={s.ava__wrapper}>
                <img src={ava1}/>
            </div>
            <div className={s.content}>
                <div className={s.text__wrapper}>
                    <span className={s.name}>{props.userName}</span>
                    <span className={s.location}>
                                <span className={s.city}>{props.city}</span>
                                <span>, </span>
                                <span className={s.country}>{props.country}</span>
                            </span>
                    <span className={s.status}>{props.status}</span>
                </div>
                <div className={s.button__wrapper}>
                    <button className={s.subscription__button}>{props.subscription}</button>
                </div>
            </div>
        </div>
    )
}

export default User;