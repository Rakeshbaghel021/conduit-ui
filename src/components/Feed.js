 import React from "react";

export default class Feed  extends React.Component {
   constructor(){
       super();
       this.state={
           articles: []
       }
   }

   componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
        .then(res=>res.json())
        .then(data=>this.setState({
            articles: data.articles
        }));
   }

   render(){
       return(
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
       )
   }
}
    
