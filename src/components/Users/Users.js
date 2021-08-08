import React from 'react'
import s from './Users.module.css'
import User from './User/User'

const Users = (props) => {
    debugger;

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for(let i = 0; i < pageCount; i++) {
        pages.push(i+1);
    }

    return (
        <div className={s.wrapper}>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            <div className={s.users__wrapper}>
                {
                    props.users.map(item => <User key={item.id} id={item.id} name={item.name} status={item.status} photo={item.photos.large}
                                                  followed={item.followed} country={"item.location.country"} city={"item.location.city"}
                                                  follow={props.follow} unfollow={props.unfollow} changeButtonCondition={props.changeButtonCondition}
                                                  arrayUsersWithDisabledId={props.arrayUsersWithDisabledId}
                    />)
                }
            </div>
            <div className={s.pagination__wrapper}>
                <div className={s.pagination}>
                    {pages.map(p => <span key={p} onClick={() => props.setCurrentPage(p)} className={p === props.currentPage ? s.active__item : null}>{p}</span>)}
                </div>
            </div>
            {/*<div className={s.btnmore__wrapper}>
                <button className={s.btnmore}>Show more</button>
            </div>*/}
        </div>
    )
}

export default Users