import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from './components/Header';
import Article from "./components/Article";
import Set from "./components/Set";
import Profile from "./components/Profile";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/article.css"
import "./styles/login.css";
import "./styles/home.css";
import "./styles/style.css";
import "./styles/register.css";
import "./styles/profile.css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  changeUser = (user) => {
    this.setState({
      user
    });
    console.log("calling handleUser", user);
  }

  publicRoutes = () => {
    return (
      <Switch>
          <Route path="/signup">
            <Register/>
          </Route>
          <Route path="/signin">
            <Login changeUser={this.changeUser}/>
          </Route>
          <Route path="/">
            <Home/> 
          </Route>
      </Switch>
    );
  }

  privateRoutes = () => {
    return (
      <Switch>
        <Route path="/article/new">
          <Article/>
        </Route>
        <Route path="/settings">
          <Set/>
        </Route>
        <Route path="/profile">
          <Profile changeUser={this.changeUser}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {
          localStorage.token ? this.privateRoutes() : this.publicRoutes()
        }
      </div>
      
    );
  }
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
