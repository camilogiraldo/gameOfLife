import React, { Component } from 'react';
import Box from '../../Components/Box/Box';
import StyledGrid from '../../Components/StyledGrid/StyledGrid';

class Grid extends Component {

  render() {
    let boxClass = "";
    let rowsArray = [];

    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        const boxId = i + "_" + j;

        boxClass = this.props.fullGrid[i][j] ? "on" : "off";
        rowsArray.push(
          <Box boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      };
    };

    return (
      <StyledGrid>
        {rowsArray}
      </StyledGrid>
    );
  };
};

export default Grid;