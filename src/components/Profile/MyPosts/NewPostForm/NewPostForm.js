import React from 'react';

import s from './NewPostForm.module.css';

import { Field, reduxForm } from "redux-form";

const NewPostForm = (props) => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className={s.new__post}>
            <Field
                name="newPostValue"
                component='textarea'
                className={s.textarea}
                id="33"
                rows="3"
            />
            <button className={s.btn} type="submit">Send</button>
        </form>
    )
}

export default reduxForm({
    form: 'new-post-form'
})(NewPostForm);