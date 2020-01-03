import React from "react";

export default class Tags extends React.Component {
   constructor(){
       super();
       this.state={
           tags: []
       }
   }

   componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
        .then(res=>res.json())
        .then(data=>this.setState({
            tags: data.tags
        }));
   }

   render(){
       console.log(this.state.tags)
       return(
           <div>
            
                 <div className="right-comp">
                 <h2 className="tags">Popular tags</h2>
                 <div className="pop">
                {this.state.tags.length && this.state.tags.map(tag=> {
                  return  ( 
                        <p className="small-tags">{tag}</p>
                   
)
                })}
                </div>
                </div>
            </div>
       )
   }
}