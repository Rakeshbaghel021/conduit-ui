import React from "react";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
    constructor(){
        super();
        this.state={
            username:"",
            email:"",
            password:"",
            msg: []
        };

    }

handleChange = event => {
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleSignup = event =>{
    event.preventDefault();
    fetch("https://conduit.productionready.io/api/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.user){
            this.props.history.push("/signin")
        } else if (data.errors) {
            this.setState({
                msg: data.errors
            });
        }
    })
}
    render(){
        return (
            <React.Fragment>
            <div>
                <div id="login-box">
          <div className="left">
          <h1 className="reg">Register</h1>
          <form onSubmit={this.handleSignup}>
          <p className="names">Username</p>
          <input type="text" className="use" name="username" onChange={this.handleChange}
          value={this.state.username} placeholder="Username" />
          <p className="names">Email</p>
          <input type="text" className="use" name="email" onChange={this.handleChange} 
          value={this.state.email} placeholder="E-mail" />
          <p className="names">Password</p>
          <input type="password" className="use" name="password" onChange={this.handleChange}
          value={this.state.password} placeholder="Password" />
         
          
          <input type="submit" className="sub" value="Sign me up" />
          </form>
          </div>
          
          <div className="right">
          <span className="loginwith">Sign in with<br />social network</span>
          
          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
          </div>
          <div className="or">OR</div>
        </div>
            </div>
    </React.Fragment>
        )
    }
    
}
export default withRouter(Register);