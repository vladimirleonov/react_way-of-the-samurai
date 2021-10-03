import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";


//it's a function which accepts one component and returns another
const withAuthRedirect = (Component) => {
    const mapStateToPropsForRedirectComponent = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    const RedirectComponent = (props) => {
        if(!props.isAuth) {
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>
    }
    const connectedRedirectComponent = connect(mapStateToPropsForRedirectComponent)(RedirectComponent);
    return connectedRedirectComponent;
}

export default withAuthRedirect;