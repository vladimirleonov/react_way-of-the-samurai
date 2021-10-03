import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        if(editMode === false) {
            console.log('update user status');
            console.log(props.status);
            console.log(status);
        }
    }, [editMode])

    return (
        <div className={s.profile__status__wrapper}>
            {!editMode &&
                <span className={s.status__text}
                    data-title={'double click here to change'}
                    onDoubleClick={() => {setEditMode(true)}}>
                    {props.status}
                </span>
            }
            {editMode &&
                <div className={s.input__wrapper} onBlur={() => {setEditMode(false)}}>
                    <input className={s.input} value={status} autoFocus={true} onChange={onChangeStatus}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;