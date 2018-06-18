import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  line-height: 0;
  margin: auto;
  box-shadow: 0px 0px 20px white;
  margin-top: 20px;
  width: 800px
`
const styledGrid = (props) => {
  return <StyledGrid> {props.children} </StyledGrid>
}

export default styledGrid