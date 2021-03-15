import React from "react"
import styled from "styled-components"

const TotopButton = () => {
  return <Totopbutton className="card">^</Totopbutton>
}

const Totopbutton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  /* background-color: rgba(61, 176, 153, 0.4); */

  &:hover {
    background-color: rgba(61, 176, 153, 0.5);
  }

  &:focus {
    background-color: rgba(61, 176, 153, 0.8);
  }
`

export default TotopButton
