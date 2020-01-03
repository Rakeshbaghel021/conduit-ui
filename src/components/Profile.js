import React from "react";
import {withRouter} from "react-router-dom";

function Profile(props){

    function handleLogout() {
        localStorage.clear();
        props.history.push("/");
        props.changeUser(null);
    }

    return(
        <div className="main-pro" >
            <div className="hero-pro">
                <div className="title-pro">
                    <img className="smile" src="smiley.png" alt=""/>
                    <p className="hero-pro">baghel</p>
                </div>
            </div>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default withRouter(Profile);