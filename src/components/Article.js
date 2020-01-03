import React from "react";
import { withRouter } from "react-router-dom";

class Article extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"",
            about:"",
            description:"",
            tag:""
        }

    }
 handleSubmit =(event)=>{
     event.preventDefult();
     fetch("https://conduit.productionready.io/api/articles",{
         method:"POST",
         headers:{
             'Content-Type': 'application/json',
             Authorization: localStorage.token
         },
         body:JSON.stringify({
             article:{
                title:this.state.title,
                about:this.state.about,
                description:this.state.description,
                tag:this.state.tag
             }
             
         })

     }).then(res=> res.json()).then(article=>{
         console.log(article.newArticle);
         this.props.history.push('/');
     })

 }

 handleChange =(event) =>{
     let {value,name}= event.target;
     this.setState({
         [name]:value
     })
 }

    render(){
        return(
            <div className="article-body">
                <div className="main-article">
                    <form onSubmit={this.handleSubmit} className="article-input">
                        <p className="para"  >Article Title </p>
                        <input type="text" name="title" value={this.state.title} className="title-arti" placeholder="Article title"/>
                        <p>Whats this Article about??</p>
                        <input type="text" name="about" value={this.state.about} className="title-arti" placeholder="Article title"/>
                        <p>Write your Article</p>
                        <textarea className="area" name="description" value={this.state.description} placeholder="write your article"/>
                        <p>Enter Tags</p>
                        <input type="text" name="tag" value={this.state.tag} className="title-tags" placeholder="Article title"/>
                        <input type="submit" className="sub-art" name="article_submit" value="Article submit" />
    
                    </form>
                </div>
            </div>
        )
    }
    
}
export default withRouter(Article) ;