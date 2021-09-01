import React from 'react';

import s from './LoginForm.module.css';

import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className={s.loginForm}>
            <div className={s.inputField}>
                <Field
                    name='emailField'
                    component='input'
                    className={s.input}
                    type='email'
                    placeholder='email'
                />
            </div>
            <div className={s.inputField}>
                <Field
                    name='passwordField'
                    component='input'
                    className={s.input}
                    type='password'
                    placeholder='password'
                />
            </div>
            <div className={s.checkboxField}>
                <Field
                    name='checkboxField'
                    component='input'
                    className={s.checkbox}
                    type='checkbox'
                />
                <span className='RememberMe'>Remember me</span>
            </div>
            <div className={s.buttonField}>
                <button className={s.button} type='submit'>Log in</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm);