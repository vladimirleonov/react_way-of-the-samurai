import React from 'react';

import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';

class Login extends React.Component {

    submit = (values) => {
        console.log(values);
    }

    render () {
        return (
            <div className={s.login__wrapper}>
                <LoginForm onSubmit={this.submit}/>
            </div>
        )
    }
}

export default Login;