import React from "react"
import Layout from "../components/Layout"
import "../style/Unterricht.scss"

const Unterricht = () => {
  return (
    <Layout>
      <div>
        <h1>Unterricht</h1>
        <div className="unterricht_container">
          <div className="side-nav card">
            <h3>Link1</h3>
            <h3>Link2</h3>
            <h3>Link3</h3>
          </div>

          <div className="content card">
            <h3>Der Inhalt</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              modi ipsam, magnam assumenda deserunt animi!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Unterricht
