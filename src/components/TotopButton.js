import React from "react"
import styled from "styled-components"

const TotopButton = () => {
  return <Totopbutton>^</Totopbutton>
}

const Totopbutton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  background-color: rgba(61, 176, 153, 0.4);
`

export default TotopButton
