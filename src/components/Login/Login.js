import React from 'react';

import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';
import {connect} from "react-redux";
import {loginThunkCreator} from "../../store/auth";
import {Redirect} from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = (values) => {
        console.log(values);
        const { emailField, passwordField, checkboxField } = values;
        debugger;
        this.props.login(emailField, passwordField, checkboxField);
    }

    render () {
        return (
                this.props.isAuth ? <Redirect to='/profile/18381'/> :
                    <div className={s.login__wrapper}>
                        <LoginForm onSubmit={this.submit}/>
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{
    login: loginThunkCreator
})(Login);