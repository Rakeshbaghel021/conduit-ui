import React from "react";
import {withRouter} from "react-router-dom";

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
           articles:[]
        }
    }

     handleLogout=()=> {
        localStorage.clear();
        this.props.history.push("/");
        this.props.changeUser(null);
    }
    render(){
        return(
            <div>
            <div className="main-pro" >
                <div className="hero-pro">
                    <div className="title-pro">
                        <img className="smile" src="smiley.png" alt=""/>
                        <p className="hero-pro">baghel</p>
                        <button className="editart">edit Profile settings</button>
                        {/* <button className="editart2">delete Article</button> */}
                    </div>
                </div>
                <button onClick={this.handleLogout}>LogOut</button>
            </div>
            <h1 className="global">Global feed</h1>
            <div>
                {
                    this.state.articles.map(article => {
                        return (<div className="left-comp">
                    <hr/>
                    <div className="small-box">
                        <img className="avatar" src={article.author.image} alt="pic"/>
                        <h2 className="head-name">{article.author.username}</h2>
                        </div>
                    <p className="date">{article.createdAt}</p>
                    <div className="art-topic">
                        <h2 className="head-topic">{article.title}</h2>
                        <p className="sub-head">{article.description}</p>
                        <p className="read">read more...</p>
                
                    </div>
                </div>)
                    })
                }
                </div>  
            </div>
            
        )
        
    }}

    


       


export default withRouter(Profile);