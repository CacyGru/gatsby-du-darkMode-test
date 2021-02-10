import React, { useContext } from "react"
import { Link } from "gatsby"

import headerStyles from "./Header.module.scss"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const activeStyles = {
    color: "#f30909",
  }

  return (
    <header style={headerStyles.header}>
      <Link to="/">
        <h1>Drum UP</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeStyles}>
              Start
            </Link>
          </li>
          <li>
            <Link to="/Unterricht/" activeStyle={activeStyles}>
              Unterricht
            </Link>
          </li>
          <li>
            <Link to="/Teamtraining/" activeStyle={activeStyles}>
              Teamtraining
            </Link>
          </li>
          <li>
            <Link to="/Kontakt/" activeStyle={activeStyles}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_THEME" })
        }}
      >
        Theme Change
      </button>
    </header>
  )
}

export default Header
