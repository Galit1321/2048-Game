import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      grid:[],
      full:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
      cnt:0,
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

  componentDidMount(){
    this.changeCell();
    this.changeCell();
  }
 
  
  changeCell = () => {
    let data=this.state.grid;
    let x,y;
  do{  
    x=Math.floor(Math.random()*4);
    y=Math.floor(Math.random()*4);
  }
    while(data[x][y].full);
    this.state.full[x][y]+=1;
    data[x][y].full=true;
    if (Math.random()<0.6){
    data[x][y].kind="two";
    data[x][y].id=2;}
    else{
      data[x][y].kind="four";
    data[x][y].id=4;
    }
    this.setState({cnt:this.state.cnt+1});
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
          <button onClick={this.changeCell}>up</button>
                <button onClick={this.changeCell}>left</button>
                <button onClick={this.changeCell}>down</button>
                <button onClick={this.changeCell}>right</button>
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
               

      </div>
    );
  }
}
export default Game;
