import { Link } from "gatsby"
import React from "react"
import footerStyles from "./Footer.module.scss"

const Footer = () => {
  let d = new Date()
  let Year = d.getFullYear()

  return (
    <footer style={footerStyles.footer}>
      &copy; <Link to="/"> Drum Up</Link> {Year} |{" "}
      <Link to="/datenschutz">Datenschutz</Link> |{" "}
      <Link to="/impressum">Impressum</Link>
    </footer>
  )
}

export default Footer
