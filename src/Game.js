import React, { Component } from "react";
import "./css/Cell.css";
import Cell from "./Cell";
import Grid from "./Grid";
import ReactDOM from 'react-dom';
class Game extends Component {


  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      grid: [],
      cnt: 0,
    };
  
  }

  rightArrow = () =>{
    let table = this.state.grid;
    let temp = [];
    for (let i= 0; i < 4;i++) {
      let arr=[];
      for (let j =3; j>=0; j--) {
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
      console.log(arr.length);
      temp.push(arr.reverse());
    }
    let newGrid=this.createNewGrid();
    for (let i = 0; i < 4; i++) {
      let lst=temp[i];
      let col=3;    
      while(lst.length>0){
        newGrid[i][col]=lst.pop();
        col--;
      }
    } this.setState({ grid: newGrid });
    this.changeCell();
  }
  

  leftArrow = () => {
    
    let table = this.state.grid;
    let temp = [];
    for (let i= 0; i < 4;i++) {
      let arr=[];
      for (let j =0; j<4; j++) {
        if (table[i][j].id !== 0) {
          let n=arr.length;
          console.log("enter line 77");
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
      let col=lst.length-1;    
      while(lst.length>0){
        newGrid[i][col]=lst.pop();
        col--;
      }
    }  this.setState({ grid: newGrid });
   // this.changeCell();
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
    //ngeCell();
  }

  createNewGrid(){
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
              arr.push(this.KindOfCell[""+ arr.pop().id*2]);
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
    //this.changeCell();
    
  };


  checkDOM =()=>{
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('main_game'))
  }

  render() {

    return (
      <div id="main_game">
       <button onClick={this.checkDOM}></button>
      </div>
    );
  }
}
export default Game;
