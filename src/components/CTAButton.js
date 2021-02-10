import React from "react"
import { Link } from "gatsby"
import ButtonStyle from "../components/CTAButton.module.css"

const CTAButton = ({ text, to }) => {
  return (
    <div>
      <Link className={ButtonStyle.a} to={to}>
        <button className={ButtonStyle.ctabutton}>{text}</button>
      </Link>
    </div>
  )
}

export default CTAButton
