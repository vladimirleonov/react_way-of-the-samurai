import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";


//it's a function which accepts one component and returns another
const withAuthRedirect = (Component) => {
    debugger;
    const mapStateToPropsForRedirectComponent = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    debugger;
    const RedirectComponent = (props) => {
        debugger;
        if(!props.isAuth) {
            debugger;
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>
    }
    debugger;
    const connectedRedirectComponent = connect(mapStateToPropsForRedirectComponent)(RedirectComponent);
    debugger;
    return connectedRedirectComponent;
}

export default withAuthRedirect;