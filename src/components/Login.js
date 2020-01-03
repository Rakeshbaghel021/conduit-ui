import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
handleChange = event=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleSignin = event=>{
    event.preventDefault();
    fetch("https://conduit.productionready.io/api/users/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            user: {
                email:this.state.email,
                password:this.state.password
            }
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.user) {
            localStorage.setItem("token", data.user.token);
            this.props.history.push("/");
            this.props.changeUser(data.user);
        }
    })
}


    render(){
        return (
            <div>
            
                <div className="loginBox">
            
            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"alt="" className="user"/>
            <h2>Login</h2>
            <form onSubmit={this.handleSignin}>
                <p className="para-1">Email</p>
                <input type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange} />
                <p className="para-1">Password</p>
                <input type="password" name="password" value={this.state.password} placeholder="Enter Password" onChange={this.handleChange} />
                <input type="submit" name="" value="sign In" /> 
            </form>
        </div>
        </div>
            
       ) 
    }
    
}

export default withRouter(Login);