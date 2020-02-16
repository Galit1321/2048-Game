import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Game from "./Game";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div >
              <Router>
          <Nav />

          
          <div className="Main">
          <Switch>
            <Route path="/" exact component={Home} />
            
            <Route path='/Game' component={Game}/>
          </Switch>
          </div>
          
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1> Welcome to my website</h1>
  </div>
);

export default App;
