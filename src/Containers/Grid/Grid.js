import React, { Component } from 'react'
import Box from '../../Components/Box/Box'
import StyledGrid from '../../Components/StyledGrid/StyledGrid'

class Grid extends Component {

  render() {
    let boxClass = "";
    let rowsArray = [];

    //use map

    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j
        //# The property on/off in the button is never reflected on the UI
        //# remove it or have it working
        boxClass = this.props.fullGrid[i][j] ? "on" : "off"
        rowsArray.push(
          <Box boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        )
      }
    }

    return (
      <StyledGrid>
        {rowsArray}
      </StyledGrid>
    )
  }
}

export default Grid