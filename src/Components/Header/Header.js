import React from 'react'
import styled from 'styled-components';
import Button from '../../UI/Button/Button'

const Header = styled.div`
    width: 50%:
    margin: auto;
    text-align: center
`

const header =  (props) => {
  return (
    <Header>
      <Button primary buttonClicked={props.playClick}> Play Game </Button>
      <Button buttonClicked={props.seedClick}> Random Seed </Button>
      <Button buttonClicked={props.pauseClick}> Pause Game</Button>
    </Header>
  )
}

export default header