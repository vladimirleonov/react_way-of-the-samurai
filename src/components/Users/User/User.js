import React from 'react';
import s from './User.module.css';
import ava1 from './ava1.jpg'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import {usersAPI} from "../../../api/api";

const User = (props) => {
   const follow = () => {
       props.follow(props.id)
   }

   const unfollow = () => {
       props.unfollow(props.id)
   }
   const btn = props.followed ?  <button disabled={props.arrayUsersWithDisabledId.some(elem => elem === props.id)} className={s.subscription__button} onClick={unfollow}>Unfollow</button>
       : <button disabled={props.arrayUsersWithDisabledId.some(elem => elem === props.id)} className={s.subscription__button} onClick={follow}>Follow</button>

    return (
        <div className={s.user}>
            <div className={s.ava__wrapper}>
                {/*<img src={ava1}/>*/}
                <NavLink to={"/profile/" + props.id}>
                    <img src={ props.photo != null ? props.photo : ava1}/>
                </NavLink>
            </div>
            <div className={s.content}>
                <div className={s.text__wrapper}>
                    <span className={s.name}>{props.name}</span>
                    <span className={s.location}>
                                <span className={s.city}>{props.city}</span>
                                <span>, </span>
                                <span className={s.country}>{props.country}</span>
                            </span>
                    <span className={s.status}>
                        {props.status != null ? props.status : "status"}
                    </span>
                </div>
                <div className={s.button__wrapper}>
                    {btn}
                </div>
            </div>
        </div>
    )
}

export default User;