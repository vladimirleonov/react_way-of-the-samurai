import React from 'react';

import s from './LoginForm.module.css';

import { Field, reduxForm } from 'redux-form'

const required = (value) => {
    return (value ? undefined : 'Required');
}

const email = (value) => {
    return (
        value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
    )
}

const minLength = (min) => {
    return (value) => {
        return value && value.length < min ? `Must be ${min} characters or more` : undefined
    }
}

const minLenght4 = minLength(4);


const renderField = ({
                         input,
                         type,
                         placeholder,
                         className,
                         meta: { touched, error, warning }
                     }) => (
    <div>
        <div>
            <input
                {...input}
                className={className}
                placeholder={placeholder}
                type={type}
            />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)


const LoginForm = (props) => {

    const { handleSubmit, reset, submitting, pristine } = props;

    return (
        <form onSubmit={handleSubmit} className={s.loginForm}>
            <div className={s.inputField}>
                <Field
                    name='emailField'
                    component={renderField}
                    className={s.input}
                    type='email'
                    placeholder='email'
                    validate = {[required, email]}
                />
            </div>
            <div className={s.inputField}>
                <Field
                    name='passwordField'
                    component={renderField}
                    className={s.input}
                    type='password'
                    placeholder='password'
                    validate = {[required, minLenght4]}
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
            <div className={s.btns__wrapper}>
                <div className={s.buttonField}>
                    <button
                        disabled={submitting}
                        className={s.login__btn}
                        type='submit'
                    >
                        Log in
                    </button>
                </div>
                <div className={s.buttonField}>
                    <button
                        disabled={submitting || pristine}
                        className={s.clear__btn}
                        type='button'
                        onClick={reset}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm);