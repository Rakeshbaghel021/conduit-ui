import React from "react";
import {withRouter} from "react-router-dom";

class Set extends React.Component{
    constructor(){
        super();
        this.state = {
            image:"",
            username:"",

            bio:"",
          
            email:"",
            password:""
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        fetch("https://conduit.productionready.io/api/user",{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                Authorization: localStorage.token
            },
            body: JSON.stringify({
                user:{
                    image: this.state.image,
                    username: this.state.username,
                    bio: this.state.bio,
                    email: this.state.email,
                    password: this.state.password
                }
                
              })
    
    
        })
        .then(res => res.json())
          .then(data => {
            if (data.success) {
              // console.log(data);
              this.props.history.push(`/profile/${this.state.username}`);
            } else {
              console.log(data);
            }
          });
    
    }
    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

    render(){



        return(
            <div className="article-body">
                <div className="main-article">
                    <form className="article-input" onSubmit={this.handleSubmit}>
                        <p className="para">Image URL</p>
                        <input type="text"onChange={this.handleChange} name="image" value={this.state.image} className="title-arti" placeholder="Article title"/>
                        <p>username</p>
                        <input type="text" value={this.state.username} name="username" onChange={this.handleChange} className="title-tags" placeholder="email"/>
                        <p>A short bio</p>
                        <textarea className="area" value={this.state.bio} name="bio" onChange={this.handleChange} placeholder="write your article"/>
                        <p>email</p>
                        <input type="email" value={this.state.email} name="email" className="title-arti"onChange={this.handleChange} placeholder="Article title"/>
                        <p>password</p>
                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange} className="title-tags" placeholder="password"/>
                        <input type="submit" className="sub-art" name="article_submit" value="Update Settings" />
    
                    </form>  
                </div>
            </div>
        )
    }
    
}
export default withRouter(Set);