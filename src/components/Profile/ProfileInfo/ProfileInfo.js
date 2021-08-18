import React from 'react';
import s from "./ProfileInfo.module.css";
import ava from "./ava.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    debugger;
    return (
        <div className={s.info__wrapper}>
            <div className={s.ava}>
                <img src={props.photos.large ? props.photos.large : ava} alt='avatar'/>
            </div>
            <div className={s.info}>
                <div className={s.name}>{props.fullName}</div>
                <ProfileStatus/>
                {props.contacts.github ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>GitHub</div>
                        <div className={s.descr}>{props.contacts.github}</div>
                    </div>
                    : null
                }
                {props.contacts.vk ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>Vk</div>
                        <div className={s.descr}>{props.contacts.vk}</div>
                    </div>
                    : null
                }
                {props.contacts.facebook ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>Facebook</div>
                        <div className={s.descr}>{props.contacts.facebook}</div>
                    </div>
                    : null
                }
                {props.contacts.instagram ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>Instagram</div>
                        <div className={s.descr}>{props.contacts.instagram}</div>
                    </div>
                    : null
                }
                {props.contacts.twitter ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>Twitter</div>
                        <div className={s.descr}>{props.contacts.twitter}</div>
                    </div>
                    : null
                }
                {props.contacts.website ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>Website</div>
                        <div className={s.descr}>{props.contacts.website}</div>
                    </div>
                    : null
                }
                {props.contacts.youtube ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>Youtube</div>
                        <div className={s.descr}>{props.contacts.youtube}</div>
                    </div>
                    : null
                }
                {props.contacts.mainLink ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>MainLink</div>
                        <div className={s.descr}>{props.contacts.mainLink}</div>
                    </div>
                    : null
                }
                <div className={`${s.text}`}>
                    <div className={s.title}>Looking for a job</div>
                    <div className={s.descr}>{props.lookingForAJob ? 'Yes' : 'No'}</div>
                </div>
                {props.lookingForAJobDescription ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>Job description</div>
                        <div className={s.descr}>{props.lookingForAJobDescription}</div>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ProfileInfo;