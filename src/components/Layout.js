import React, { useContext } from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../style/styles.scss"
import TotopButton from "./TotopButton"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Layout = props => {
  const state = useContext(GlobalStateContext)

  return (
    <div className={state.theme}>
      <div className="container">
        <div className="content">
          <Header />
          {props.children}
        </div>
        <TotopButton />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
