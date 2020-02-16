import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell";

class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      score: 0,
      grid:[],
    
    };

    let arr_row=[];
    let id=1;
  for (let row = 0; row < 4; row++) {
    arr_row=[];
    for (let col = 0; col < 4; col++) {
        arr_row.push({id:id , kind: "emptyCell" ,full: false,row:row,col:col,});
        id++;
    }
    this.state.grid.push(arr_row);
  }
 }

  addElem(e) {
    let rr1, rc1;
    do {
      rr1 = Math.floor(Math.random() * 4);
      rc1 = Math.floor(Math.random() * 4);
    } while (this.state.data[rr1][rc1].full);
    }
 
  
  changeCell = () => {
    let data=this.state.grid;
    let x=Math.floor(Math.random()*4);
    let y=Math.floor(Math.random()*3);
    data[x][y].full=true;
    data[x][y].kind="eight";
    this.setState({grid:data});
  };

 
  

  render() {
    const score = this.state.score;
    const data = this.state.grid;
    let cell_id=0;
    return (
      <div>
        <div>
          <h1> {score}</h1>
          <h1> Welcome to the game </h1>
        </div>
        <table >
        <tbody>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <tr  key={ cell_id++}  >
                    {dat.map(elem => (
                        <th key={elem.row.toString() + '-' + elem.col.toString()} > 
                        <Cell kind={elem.kind} info={elem} /> 
                        </th>
                    ))}
                </tr>
              ))}
              </tbody>
                </table>
                <button onClick={this.changeCell}>Click Me</button>
      </div>
    );
  }
}
export default Game;
