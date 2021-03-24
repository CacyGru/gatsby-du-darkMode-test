import React, { useContext } from "react"
import { Link } from "gatsby"

import headerStyles from "./Header.module.scss"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
/* import ButtonLight from "./Buttonlight" */
import { VscColorMode } from "react-icons/vsc"
import { BiHomeSmile } from "react-icons/bi"
import { FaDrum } from "react-icons/fa"
import { AiOutlineTeam, AiOutlineContacts } from "react-icons/ai"

const Header = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const activeStyles = {
    color: "#3db099",
  }

  return (
    <header className="card" style={headerStyles.header}>
      <Link to="/" className="logo">
        logo
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeStyles}>
              <BiHomeSmile /> Start
            </Link>
          </li>
          <li>
            <Link to="/unterricht" activeStyle={activeStyles}>
              <FaDrum /> Unterricht
            </Link>
          </li>
          <li>
            <Link to="/teamtraining" activeStyle={activeStyles}>
              <AiOutlineTeam /> Teamtraining
            </Link>
          </li>
          <li>
            <Link to="/kontakt" activeStyle={activeStyles}>
              <AiOutlineContacts /> Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <VscColorMode className="dm-switch"
        type="button"
        size="2em"
        /* color="#3DB099" */
        onClick={() => {
          dispatch({ type: "TOGGLE_THEME" })
        }}
      />

      {/* <ButtonLight
        type="button"
        onClick={() => {
          dispatch({ type: "TOGGLE_THEME" })
        }}
      >
        Theme Change
      </ButtonLight> */}
    </header>
  )
}

export default Header
