import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        if(props.status != status) {
            // console.log('update status');
            props.updateUserStatus(status);
        }
    }

    const changeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
        // console.log('new status has come');
    }, [props.status])

    return (
        <div className={s.profile__status__wrapper}>
            {!editMode &&
                <span className={s.status__text}
                    data-title={'double click here to change'}
                    onDoubleClick={activateEditMode}>
                    {props.status}
                </span>
            }
            {editMode &&
                <div className={s.input__wrapper}>
                    <input className={s.input}
                           value={status}
                           onChange={changeStatus}
                           autoFocus={true}
                           onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;