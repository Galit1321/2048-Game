import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      grid: [],
      full: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      cnt: 0
    };
    let arr_row = [];
    for (let row = 0; row < 4; row++) {
      arr_row = [];
      for (let col = 0; col < 4; col++) {
        arr_row.push({ id: 0, kind: "emptyCell", full: false });
      }
      this.state.grid.push(arr_row);
    }
  }
  stylesOfSq = ["emptyCell", "two", "four", "eight", "sixteen", "tree"];
  KindOfCell = {
    "0": { id: 0, kind: "emptyCell", full: false },
    "2": { id: 2, kind: "two", full: true },
    "4": { id: 4, kind: "four", full: true },
    "8": { id: 8, kind: "eight", full: true }
  };

  componentDidMount() {
    this.changeCell();
    this.changeCell();
  }

  upperArrow = () => {
    let table = this.state.grid;
    let temp = [[], [], [], []];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (table[i][j].id != 0) {
          let n=temp[j].pop();
          if (typeof n=== "undefined" ){
            temp[j].push(table[i][j]);
          }
          else if ( n.id==table[i][j].id){
            temp[j].push(this.KindOfCell[""+n.id*2]);
          }
          else{
            temp[j].push(n);
            temp[j].push(table[i][j]);
          }
          table[i][j]=this.KindOfCell['0'];
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      let lst=temp[i];
      let row=lst.length-1;
      while(lst.length>0){
        table[row][i]=lst.pop();
        row--;
      }
    }
    this.setState({ grid: table });
  this.changeCell();
  };

  changeCell = () => {
    let data = this.state.grid;
    let x, y;
    do {
      x = Math.floor(Math.random() * 4);
      y = Math.floor(Math.random() * 4);
    } while (data[x][y].full);
    this.state.full[x][y] += 1;
    data[x][y].full = true;
    if (Math.random() < 0.6) {
      data[x][y].kind = "two";
      data[x][y].id = 2;
    } else {
      data[x][y].kind = "four";
      data[x][y].id = 4;
    }
    this.setState({ cnt: this.state.cnt + 1 });
    this.setState({ grid: data });
  };

  render() {
    const score = this.state.score;
    const data = this.state.grid;
    let cell_id = 0;
    return (
      <div>
        <div>
          <h1> {score}</h1>
          <h1> Welcome to the game </h1>
          <button onClick={this.upperArrow}>up</button>
          <button onClick={this.changeCell}>left</button>
          <button onClick={this.changeCell}>down</button>
          <button onClick={this.changeCell}>right</button>
        </div>
        <table>
          <tbody>
            {data.map(dat => (
              <tr key={cell_id++}>
                {dat.map(elem => (
                  <th key={cell_id + "-" + cell_id}>
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
export default Game;
