import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";

const NavContainer = (props) => {
    return (
        <Nav myId={props.myId}/>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.auth.id
    }
}

export default connect(mapStateToProps)(NavContainer);
