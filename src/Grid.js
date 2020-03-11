import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell";

let KindOfCell = {
  "0": { id: 0, kind: "emptyCell", full: false },
  "2": { id: 2, kind: "two", full: true },
  "4": { id: 4, kind: "four", full: true },
  "8": { id: 8, kind: "eight", full: true },
  "16": { id: 16, kind: "thsix", full: true },
  "32": { id: 32, kind: "thirty-two", full: true },
  "64": { id: 64, kind: "	sixty-four", full: true },
  "128": { id: 128, kind: "oneHtwenty-four", full: true },
  "256": { id: 256, kind: "twoHfifty-six", full: true },
  "512": { id: 512, kind: "", full: true },
  "1024": {},
  "2048": {}
};

class Grid extends Component {
  constructor(props) {
    super(props);
    let direction = props.dir;
    let cells = props.cells;
    let btn = this.props.btn;
    this.state = {
      grid: []
    };
    let arr_row = [];
    for (let row = 0; row < 4; row++) {
      arr_row = [];

      for (let col = 0; col < 4; col++) {
        arr_row.push({ id: 0, kind: "emptyCell", full: false });
      }
      this.state.grid.push(arr_row);
      let lst = cells[i];
      let col;
      if (direction == "horizontal") {
        if (btn == "left") {
          col = lst.length - 1;
        }else{
            col=3;
        }
        while (lst.length > 0) {
          this.state.grid[i][col] = KindOfCell[ lst.pop()];
          col--;
        }
      }
      else {

      }
    }
  }

  createACell = () => {
    let data = this.state.grid;
    let x, y;
    do {
      x = Math.floor(Math.random() * 4);
      y = Math.floor(Math.random() * 4);
    } while (data[x][y].full);
    if (Math.random() < 0.6) {
      data[x][y] = this.KindOfCell["2"];
    } else {
      data[x][y] = this.KindOfCell["4"];
    }
    this.setState({ cnt: this.state.cnt + 1 });
    this.setState({ grid: data });
  };

  render() {
    const score = this.state.score;
    const data = this.state.grid;
    let cell_id = 0;
    let col_id = 0;
    return (
      <div>
        <div>
          <h1> {score}</h1>
          <h1> Welcome to the game </h1>
          <button onClick={this.upperArrow}>up</button>
          <button onClick={this.leftArrow}>left</button>
          <button onClick={this.DownArrow}>down</button>
          <button onClick={this.rightArrow}>right</button>
        </div>
        <table>
          <tbody>
            {data.map(dat => (
              <tr key={cell_id++}>
                {dat.map(elem => (
                  <th key={cell_id + "-" + col_id++}>
                    <Cell info={elem} />
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
