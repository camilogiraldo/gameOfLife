import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: inline-block;
    border: 1px solid black;
    width: 15px;
    height: 15px;
    margin-left: -1px;
    margin-bottom: -1px;
    background-color: white
    &:hover: {
        background: #00CCFF;
    }
`

const box = (props) => {
  return <Box
    id={props.boxId}
    style={props.boxClass === "on" ? { backgroundColor: "black" } : {}}
    onClick={() => props.selectBox(props.row, props.col)}>
    {props.children}
    </Box>
};

export default box;
