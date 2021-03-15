import React, { useContext } from "react"
import { Link } from "gatsby"

import headerStyles from "./Header.module.scss"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import ButtonLight from "./Buttonlight"

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const activeStyles = {
    color: "#db0202",
  }

  return (
    <header className="card" style={headerStyles.header}>
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
            <Link to="/unterricht" activeStyle={activeStyles}>
              Unterricht
            </Link>
          </li>
          <li>
            <Link to="/teamtraining" activeStyle={activeStyles}>
              Teamtraining
            </Link>
          </li>
          <li>
            <Link to="/kontakt" activeStyle={activeStyles}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <ButtonLight
        type="button"
        onClick={() => {
          dispatch({ type: "TOGGLE_THEME" })
        }}
      >
        Theme Change
      </ButtonLight>
    </header>
  )
}

export default Header
