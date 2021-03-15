import React from "react"
import { Link } from "gatsby"
import ButtonStyle from "../components/CTAButton.module.css"

const CTAButton = ({ text, to }) => {
  return (
    <div>
      <Link className={ButtonStyle.ctabutton} to={to}>
        {text}
      </Link>
    </div>
  )
}

export default CTAButton
