import React from 'react';

import s from './NewMessageForm.module.css';

import { Field, reduxForm } from "redux-form";

const NewMessageForm = (props) => {

    const { handleSubmit, pristine, submitting } = props;

    return (
        <form onSubmit={handleSubmit} className={s.newMessageForm}>
            <Field
                name='newMessageValue'
                component='textarea'
                className={s.textarea}
                type="text"
                rows='3'
            />
            <button
                disabled={pristine || submitting}
                className={s.btn}
                type='submit'
            >
                Send
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'new-message-form'
})(NewMessageForm);