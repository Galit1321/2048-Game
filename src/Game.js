import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell";

class Game extends Component {

  stylesOfSq = ["emptyCell", "two", "four", "eight", "sixteen", "tree"];
  KindOfCell = {
    "0": { id: 0, kind: "emptyCell", full: false },
    "2": { id: 2, kind: "two", full: true },
    "4": { id: 4, kind: "four", full: true },
    "8": { id: 8, kind: "eight", full: true },
    "16": {id: 16, kind: "thsix", full: true}

  };
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      grid: [],
      cnt: 0
    };
    this.state.grid=this.createNewGrid();
    this.changeCell();
    this.changeCell();
  }

  

  upperArrow = () => {
    let table = this.state.grid;
    let temp = [];
    for (let j = 0; j < 4; j++) {
      let arr=[];
      for (let i = 0; i < 4; i++) {
        if (table[i][j].id !== 0) {
          let n=arr.length;
          if (n>0 && arr[n-1].id===table[i][j].id ){
            arr.push(this.KindOfCell[""+ arr.pop().id*2]);;
          }
          else{
            arr.push(table[i][j]);
          }
          
        }
      }
      temp.push(arr);
    }
    let newGrid=this.createNewGrid();
    for (let i = 0; i < 4; i++) {
      let lst=temp[i];
      let row=lst.length-1;    
      while(lst.length>0){
        newGrid[row][i]=lst.pop();
        row--;
      }
    }  this.setState({ grid: newGrid });
  }

  createNewGrid = () =>{
    let res_grid=[];
    let arr_row = [];
    for (let row = 0; row < 4; row++) {
      arr_row = [];
      for (let col = 0; col < 4; col++) {
        arr_row.push({ id: 0, kind: "emptyCell", full: false });
      }
      res_grid.push(arr_row);
    }
    return  res_grid;
  }

   DownArrow = () => {
      let table = this.state.grid;
      let temp = [];
      for (let j = 3; j >=0; j--) {
        let arr=[];
        for (let i = 3; i >=0; i--) {
          if (table[i][j].id !== 0) {
            let n=arr.length;
            if (n>0 && arr[n-1].id===table[i][j].id ){
              arr.push(this.KindOfCell[""+ arr.pop().id*2]);;
            }
          
            else{
              arr.push(table[i][j]);
            }
          }
        }
        temp.push(arr);
      }
      temp.reverse();
      console.log(temp);
      let newGrid=this.createNewGrid();
      for (let i = 0; i < 4; i++) {
        let lst=temp[i];
        let row=4-lst.length;
        while(lst.length>0){
          newGrid[row][i]=lst.pop();
          row++;
        }
      }
    this.setState({ grid: newGrid });
    ///this.changeCell();
  };

  changeCell = () => {
    console.log("call function line 77");
    let data = this.state.grid;
    let x, y;
    do {
      x = Math.floor(Math.random() * 4);
      y = Math.floor(Math.random() * 4);
    } while (data[x][y].full);
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
    let col_id=0;
    return (
      <div>
        <div>
          <h1> {score}</h1>
          <h1> Welcome to the game </h1>
          <button onClick={this.upperArrow}>up</button>
          <button onClick={this.changeCell}>left</button>
          <button onClick={this.DownArrow}>down</button>
          <button onClick={this.changeCell}>right</button>
        </div>
        <table>
          <tbody>
            {data.map(dat => (
              <tr key={cell_id++}>
                {dat.map(elem => (
                  <th key={cell_id + "-" +(col_id++) }>
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
