import React from "react";
import { withRouter } from "react-router-dom";

class Article extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"",
            description:"",
            body: "",
            tagList: []
        }    

    }


    handleChange =(event) =>{
        let {value,name}= event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        console.log(localStorage.token)
        e.preventDefault();
        const body = {
            article: {
                title: this.state.title,
                description: this.state.description,
                body: this.state.body,
                tagList: this.state.tagList
            }
        }

        fetch("https://conduit.productionready.io/api/articles", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                Authorization: `Token ${localStorage.token}`,
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data)) 
            this.props.history.push("/")
    }

    


    render(){
        return(
            <div className="article-body">
                <div className="main-article">
                    <form onSubmit={this.handleSubmit} className="article-input">
                        <p className="para"  >Article Title </p>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="title-arti" placeholder="Article title"/>
                        <p>Whats this Article about??</p>
                        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} className="title-arti" placeholder="Article title"/>
                        <p>Write your Article</p>
                        <textarea className="area" name="description" value={this.state.description} onChange={this.handleChange} placeholder="write your article"/>
                        <p>Enter Tags</p>
                        <input type="text" name="tagList" value={this.state.tagList} onChange={this.handleChange} className="title-tags" placeholder="Article title"/>
                        <input type="submit" className="sub-art" name="article_submit" value="Article submit" />
    
                    </form>
                </div>
            </div>
        )
    }
    
}
export default withRouter(Article) ;  