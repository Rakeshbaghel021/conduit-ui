import React from "react";

export default function Set(){
    return(
        <div className="article-body">
            <div className="main-article">
                <form className="article-input">
                    <p className="para">Yours Settings</p>
                    <input type="text" className="title-arti" placeholder="Article title"/>
                    <p>URL profile picture</p>
                    <input type="text" className="title-arti" placeholder="Article title"/>
                    <p>A short bio</p>
                    <textarea className="area" placeholder="write your article"/>
                    <p>Enter Tags</p>
                    <input type="email" className="title-tags" placeholder="email"/>
                    <input type="password" className="title-tags" placeholder="password"/>
                    <input type="submit" className="sub-art" name="article_submit" value="Update Settings" />

                </form>
            </div>
        </div>
    )
}