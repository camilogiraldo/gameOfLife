import React, { Component } from 'react';
import Grid from './Containers/Grid/Grid';
import arrayClone from './_helpers/arrayClone'
import Header from './Components/Header/Header'

class App extends Component {
  //# Try avoid the use of the constructor
  rows = 50;
  cols = 50;

  state = {
    fullGrid: Array(this.rows)
      .fill()
      .map((() => Array(this.cols).fill(false)))
  }

  // constructor() {
  //   super();
  //   this.rows = 50;
  //   this.cols = 50;

  //   this.state = {
  //     fullGrid: Array(this.rows).fill().map((() => Array(this.cols).fill(false)))
  //   }
  // }

  //# The grid should always start with the given active boxes
  //# this is meant to check your use of react lifecycle

  clickHandler = (row, col) => {
    //# Since you are not reassigning the full value, you can use const here
    let gridCopy = arrayClone(this.state.fullGrid)
    gridCopy[row][col] = !gridCopy[row][col]
    this.setState({
      fullGrid: gridCopy
    })
  }

  playGame = () => {
    clearInterval(this.interval)
    this.interval = setInterval(this.play, 1000)
  }

  play = () => {
    //# Maybe some destructuring?
    let { fullGrid } = this.state;
    // let grid1 = this.state.fullGrid;
    let grid2 = arrayClone(this.state.fullGrid)

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        //# Overcomplex, impossible to read
        //# There should be two process, reading neighbors and setting dead/alive
        //# Cells will only live with 2 or 3 neighbors, nothing else
        if (i > 0) if (grid1[i - 1][j]) count++;
        if (i > 0 && j > 0) if (grid1[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (grid1[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (grid1[i][j + 1]) count++;
        if (j > 0) if (grid1[i][j - 1]) count++;
        if (i < this.rows - 1) if (grid1[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (grid1[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1) if (grid1[i + 1][j + 1]) count++;
        if (grid1[i][j] && (count < 2 || count > 3)) grid2[i][j] = false;
        if (!grid1[i][j] && count === 3) grid2[i][j] = true;
      }
    }

    //# In the destructuring way
    this.setState({ fullGrid })
    // this.setState({
    //   fullGrid: grid2
    // })
  }

  pauseGame = () => {
    clearInterval(this.interval)
  }

  seedGame = () => {
    //# Since you are not reassigning the full value, you can use const here
    let gridCopy = arrayClone(this.state.fullGrid)
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
    })
  }

  render() {
    return (
      <div>
        {/*//# Multi properties components look better in multiline :)*/}
        <Header
          playClick={this.playGame}
          seedClick={this.seedGame}
          pauseClick={this.pauseGame} />
        <Grid
          fullGrid={this.state.fullGrid}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.clickHandler} />
      </div>
    )
  }
}

export default App;
