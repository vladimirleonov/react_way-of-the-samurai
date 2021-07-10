import React from 'react'
import s from './Users.module.css'
import User from './User/User'

const Users = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.users__wrapper}>
                <User userName = 'Dmitry K.' subscription = 'Follow' status = "I'm looking for a job" country = 'Belarus' city = 'Minsk'/>
                <User userName = 'Svetlana D.' subscription = 'Follow' status = "I'm ready to help you" country = 'Russia' city = 'Moscow'/>
                {/*
                <div className={s.user}>
                    <div className={s.ava__wrapper}>
                        <img src={ava}/>
                    </div>
                    <div className={s.content}>
                        <div className={s.text__wrapper}>
                            <span className={s.name}>Dmitry K.</span>
                            <span className={s.location}>
                                        <span className={s.city}>Minsk</span>
                                        <span>, </span>
                                        <span className={s.country}>Belarus</span>
                                    </span>
                            <span className={s.status}>I'm looking for a job</span>
                        </div>
                        <div className={s.button__wrapper}>
                            <button className={s.subscription__button}>Follow</button>
                        </div>
                    </div>
                </div>
                <div className={s.user}>
                    <div className={s.ava__wrapper}>
                        <img src={ava}/>
                    </div>
                    <div className={s.content}>
                        <div className={s.text__wrapper}>
                            <span className={s.name}>Dmitry K.</span>
                            <span className={s.location}>
                                <span className={s.city}>Minsk</span>
                                <span>, </span>
                                <span className={s.country}>Belarus</span>
                            </span>
                            <span className={s.status}>I'm looking for a job</span>
                        </div>
                        <div className={s.button__wrapper}>
                            <button className={s.subscription__button}>Follow</button>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default Users