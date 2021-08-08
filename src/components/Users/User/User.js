import React from 'react';
import s from './User.module.css';
import ava1 from './ava1.jpg'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import {usersAPI} from "../../../api/api";

const User = (props) => {
    debugger;
   const follow = () => {
       /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},
           {
               withCredentials: true,
               headers: {
                   'API-KEY': '03dc85c1-6913-4689-96c3-0599c7316b8b'
               }
           })*/
       usersAPI.follow(props.id)
           .then((data) => {
               debugger;
               if (data.resultCode === 0) {
                   debugger;
                   props.follow(props.id);
               }
           })
   }

   const unfollow = () => {
       /*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
           {
               withCredentials: true,
               headers: {
                   'API-KEY': '03dc85c1-6913-4689-96c3-0599c7316b8b'
               }
           })*/
       usersAPI.unfollow(props.id)
           .then((data) => {
               if (data.resultCode === 0) {
                   debugger;
                   props.unfollow(props.id);
               }
           })
   }

    const btn = props.followed ?  <button disabled={props.isDisabled} className={s.subscription__button} onClick={unfollow}>Unfollow</button>
        : <button disabled={props.isDisabled} className={s.subscription__button} onClick={follow}>Follow</button>

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