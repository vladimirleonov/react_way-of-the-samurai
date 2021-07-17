import React from 'react'
import s from './Users.module.css'
import User from './User/User'
import * as axios from 'axios';

class UsersC extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.users = props.users.map(item => <User id={item.id} name={item.name} status={item.status} photo={item.small} followed={item.followed} country={"item.location.country"}
                                                   city={"item.location.city"} follow={this.props.follow} unfollow={this.props.unfollow}/>);
        debugger;
    }
    getUsers = () => {
        debugger;
        if(this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    debugger;
                    this.props.setUsers(response.data.items);
                })
        }
    }
    render () {
        return (
            <div className={s.wrapper}>
                <button onClick={this.getUsers}>Get Users</button>
                <div className={s.users__wrapper}>
                    {this.users}
                    {/*<User userName = 'Dmitry K.' subscription = 'Follow' status = "I'm looking for a job" country = 'Belarus' city = 'Minsk'/>
                <User userName = 'Svetlana D.' subscription = 'Unfollow' status = "I'm ready to help you" country = 'Russia' city = 'Moscow'/>*/}
                </div>
                <div className={s.btnmore__wrapper}>
                    <button className={s.btnmore}>Show more</button>
                </div>
            </div>
        )
    }
}

export default UsersC