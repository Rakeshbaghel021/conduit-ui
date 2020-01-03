import React from "react";
import Feed from './Feed';
import Tags from './Tags';

export default function Home(){
    return (
        <div className="main" >
            {
                localStorage.token ? null : (
                    <div className="hero">
                    <div className="title">
                        <h2 className="hero-con">Conduit</h2>
                        <p className="hero-sub">A place to share your knowledge.</p>
                    </div>
            </div>
                )
            }
            <h1 className="global">Global feed</h1>
            {
                localStorage.token ? (<h1 className="global">Your feed</h1>) : null
            }
            <div className="feed">
                <Feed />
                <Tags/>
                </div>
        </div>
    )
}