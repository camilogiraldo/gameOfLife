import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer
`

const button = (props) => {
  return (
    <Button onClick={props.buttonClicked}>{props.children}</Button>
  );
};

export default button;