import React, { Component } from "react";

class Grid extends Component {

    constructor(props){
        super(props);
        this.state={
            grid:[],
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

    
  createACell = () => {
    let data = this.state.grid;
    let x, y;
    do {
      x = Math.floor(Math.random() * 4);
      y = Math.floor(Math.random() * 4);
    } while (data[x][y].full);
    if (Math.random() < 0.6) {
      data[x][y]=this.KindOfCell["2"];
    } else {
      data[x][y]=this.KindOfCell["4"];
    }
    this.setState({ cnt: this.state.cnt + 1 });
    this.setState({ grid: data });
  };


    stylesOfSq = ["emptyCell", "two", "four", "eight", "sixteen", "tree"];
  KindOfCell = {
    "0": { id: 0, kind: "emptyCell", full: false },
    "2": { id: 2, kind: "two", full: true },
    "4": { id: 4, kind: "four", full: true },
    "8": { id: 8, kind: "eight", full: true },
    "16": {id: 16, kind: "thsix", full: true},
    "32":{id: 32, kind: "thirty-two", full: true},
    "64": {id:64,kind:"	sixty-four",full: true},
    "128":{id:128,kind:"oneHtwenty-four",full:true},
    "256":{id:256,kind:"twoHfifty-six",full:true},
    "512":{id:512,kind:"",full:true},
    "1024":{},
    "2048":{}
  };


}

export default Grid;