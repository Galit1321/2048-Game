import React, { Component } from "react";
import "./css/App.css";
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }  

      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div className="clock">
            <h2> {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }
    
    
}


  export default Clock;
  