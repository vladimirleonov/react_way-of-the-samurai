import React from 'react'
import s from './Users.module.css'
import User from './User/User'

const Users = (props) => {
    debugger;
    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, userName: 'Dmitry K.', subscription: false, status: "I'm looking for a job", location: {country: 'Belarus', city: 'Minsk'}},
            {id: 2, userName: 'Svetlana D.', subscription: false, status: "I'm ready to help you", location: {country: 'Russia', city:'Moscow'}},
            {id:3, userName: 'Sergei S.', subscription: false, status: "I'm like football", location: {country: 'Ukrane', city: 'Kiev'}}
        ])
    }

    const users = props.users.map(item => <User userId={item.id} userName={item.userName}  subscription={item.subscription} status={item.status} country={item.location.country} city={item.location.city}
                                                follow={props.follow} unfollow={props.unfollow}/>);

    return (
        <div className={s.wrapper}>
            <div className={s.users__wrapper}>
                {users}
                {/*<User userName = 'Dmitry K.' subscription = 'Follow' status = "I'm looking for a job" country = 'Belarus' city = 'Minsk'/>
                <User userName = 'Svetlana D.' subscription = 'Unfollow' status = "I'm ready to help you" country = 'Russia' city = 'Moscow'/>*/}
            </div>
            <div className={s.btnmore__wrapper}>
                <button className={s.btnmore}>Show more</button>
            </div>
        </div>
    )
}

export default Users