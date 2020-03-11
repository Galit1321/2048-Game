import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return(
      <div>
      <nav>
      <ul className="nav-links">
          
          <Clock />
          <Link to='/'>
          <li>Home</li>
          </Link>
          <Link to="/Game">
          <li>Game</li>
          </Link>
        </ul>
    </nav>
      
    </div>
    );
  }
}

export default Nav;
