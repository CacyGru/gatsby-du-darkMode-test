import React from "react"
import { Link } from "gatsby"
import ButtonStyles2 from "./Button2.module.css"

const Button2 = ({ text, to }) => {
  return (
    <div>
      <Link className={ButtonStyles2.a} to={to}>
        <button className={ButtonStyles2.button2}>{text}</button>
      </Link>
    </div>
  )
}

export default Button2
