import React from 'react';

import { Link } from 'react-router-dom';


function Header() {
    return(
        <div>
        {
            localStorage.token ? (
                <div className="header">
                <div className="logo-header">
                <h1 className="logo">Conduit</h1>

                </div>
                    <div className="header-right">
                        <Link to="/" className="home">Home</Link>
                        <Link to="/article/new" className="home">New post</Link>
                        <Link to="/settings" className="home">Settings</Link>
                        <Link to="/profile" className="home">profile</Link>
                    </div>
                </div>
            ) : (
                <div className="header">
                <div className="logo-header">
                <h1 className="logo">Conduit</h1>

                </div>
                <div className="header-right">
                    <Link to="/" className="home">Home</Link>
                    <Link to="/signin" className="home">Sign in</Link>
                    <Link to="/signup" className="home">Sign up</Link>
                </div>
                </div>
            )
        }
        </div>
    );
}

export default Header;