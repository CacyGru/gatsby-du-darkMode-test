import styled from "styled-components"

export const Heading = styled.h1`
  text-align: center;
  color: green;
`

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`

export const Button = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 50%;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  color: rgba(61, 176, 153, 0.6);
  font-size: 2rem;
  /* background-color: rgba(61, 176, 153, 0.3); */

  &:hover {
    color: rgba(61, 176, 153, 1);
  }
  /* 
  &:focus {
    background-color: rgba(61, 176, 153, 0.6);
  } */
`
