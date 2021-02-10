import React from "react"
import ButtonStyles from "./ThemeChangeBtn.module.css"

const ThemeChangeBtn = ({ text }) => {
  return <button style={ButtonStyles.button}>{text}</button>
}

export default ThemeChangeBtn
