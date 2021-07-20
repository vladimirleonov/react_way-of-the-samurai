import React from 'react'
import s from './Users.module.css'
import User from './User/User'
import * as axios from 'axios';

class UsersC extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                debugger;
                console.log(response.data);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
                debugger;
            })
    }

    setCurrentPage = (currentPage) => {
        debugger;
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                debugger;
                this.props.setUsers(response.data.items)
            });
    }

    render () {
        debugger;

        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];

        for(let i = 0; i < pageCount; i++) {
            pages.push(i+1);
        }

        return (
            <div className={s.wrapper}>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                <div className={s.users__wrapper}>
                    {
                        this.props.users.map(item => <User key={item.id} id={item.id} name={item.name} status={item.status} photo={item.small} followed={item.followed} country={"item.location.country"} city={"item.location.city"}
                                                      follow={this.props.follow} unfollow={this.props.unfollow}/>)
                    }
                </div>
                <div className={s.pagination__wrapper}>
                    <div className={s.pagination}>
                        {pages.map(p => <span key={p} onClick={() => this.setCurrentPage(p)} className={p === this.props.currentPage && s.active__item}>{p}</span>)}
                    </div>
                </div>
                {/*<div className={s.btnmore__wrapper}>
                    <button className={s.btnmore}>Show more</button>
                </div>*/}
            </div>
        )
    }
}

export default UsersC