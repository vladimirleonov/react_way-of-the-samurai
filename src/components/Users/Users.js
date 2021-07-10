import React from 'react'
import s from './Users.module.css'
import User from './User/User'

const Users = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.users__wrapper}>
                <User userName = 'Dmitry K.' subscription = 'Follow' status = "I'm looking for a job" country = 'Belarus' city = 'Minsk'/>
                <User userName = 'Svetlana D.' subscription = 'Follow' status = "I'm ready to help you" country = 'Russia' city = 'Moscow'/>
            </div>
            <div className={s.btnmore__wrapper}>
                <button className={s.btnmore}>Show more</button>
            </div>
        </div>
    )
}

export default Users