import React, { Component } from "react";
import "./css/Cell.css";

class Cell extends Component {
  render() {
    const data = this.props.info;
    if (data.full) {
      return <div className={data.kind}> <h2 className="cell_id">
        {data.id}
      </h2></div>;
    }
    return <div className="emptyCell"></div>;
  }
}
export default Cell;
