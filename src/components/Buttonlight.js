import styled from "styled-components"

const ButtonLight = styled.button`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  background: #ebebeb;
  color: rgba(61, 176, 153, 1);
  outline: none;
  font-weight: bold;
  padding: 5px 10px;
  box-shadow: 1px 1px 2px rgb(61, 176, 153);
  border: none;
  border-radius: 9999px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(61, 176, 153, 1);
    color: white;
    box-shadow: 2px 2px 4px rgb(61, 176, 153);
    text-shadow: 2px 2px 5px #2f8675;
  }
`

export default ButtonLight
