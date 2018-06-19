import React, { Component } from 'react';
import Grid from './Containers/Grid/Grid';
import arrayClone from './_helpers/arrayClone';
import Header from './Components/Header/Header';

class App extends Component {
  rows = 50;
  cols = 50;

  state = {
        fullGrid: Array(this.rows)
        .fill()
        .map((() => Array(this.cols).fill(false)))
     };

  componentDidMount = () => {
    const initialSeed = [[0,0], [0,1], [1,0], [1,3], [2,1], [2,2]];
    const gridCopy = arrayClone(this.state.fullGrid);
    
    initialSeed.forEach(coord => {
      let i = coord[0]
      let j = coord[1]
      gridCopy[i][j] = true
    });

    this.setState({
      fullGrid: gridCopy
    });
  }
  

  clickHandler = (row, col) => {
    const gridCopy = arrayClone(this.state.fullGrid);
    gridCopy[row][col] = !gridCopy[row][col];

    this.setState({
      fullGrid: gridCopy
    });
  }

  playGame = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.play, 1000);
  }

  play = () => {
    let { fullGrid } = this.state;
    let newGrid = arrayClone(this.state.fullGrid);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        count = this.getLiveNeighborCount(i, j, fullGrid);
        
        if (fullGrid[i][j] && (count < 2 || count > 3)) newGrid[i][j] = false;
        if (!fullGrid[i][j] && count === 3) newGrid[i][j] = true;

      }
    }
    
    let stopFlag = true;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) { 
        if (this.state.fullGrid[i][j] !== newGrid[i][j]) {
          stopFlag = false;
        };
      };
    };

    if (stopFlag) {
      this.stopGame();
    }
  
    this.setState({ fullGrid: newGrid });
  }

  getLiveNeighborCount = (row, col, board) => {
    let lnc = 0;
    for (let rI = row - 1; rI <= row + 1; rI += 1) {
      for (let cI = col - 1; cI <= col + 1; cI += 1) {
        if (
          (rI !== row || cI !== col) &&
          rI >= 0 &&
          rI < board.length &&
          board[rI][cI]
        ) {
          lnc += 1;
        };
      };
    };
    return lnc;
  };

  stepForward = () => {
    this.play();
  }

  stopGame = () => {
    clearInterval(this.interval);
  }

  seedGame = () => {
    const gridCopy = arrayClone(this.state.fullGrid);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        //seed randomly
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }

    this.setState({
      fullGrid: gridCopy
    });
  }

  render() {
    return (
      <div>
        <Header
          playClick={this.playGame}
          seedClick={this.seedGame}
          stepForward={this.stepForward}
          pauseClick={this.stopGame} />
        <Grid
          fullGrid={this.state.fullGrid}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.clickHandler} />
      </div>
    )
  };
};

export default App;
