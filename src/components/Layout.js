import React, { useContext } from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../style/styles.scss"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import ScrollButton from "./ScrollButton"

const Layout = props => {
  const state = useContext(GlobalStateContext)
  return (
    <div className={state.theme}>
      <div className="bg">
        <div className="container card">
          <div className="content">
            <Header />

            {props.children}
          </div>

          <ScrollButton />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
