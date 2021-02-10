import React from "react"
import CTAButton from "../components/CTAButton"
import Layout from "../components/Layout"
import "../style/Home.scss"

const Home = () => {
  return (
    <Layout>
      <div className="subHeader">Schlagzeugunterricht vom Profi</div>
      <h1>
        <blockquote>
          Ich bringe ihr Trommeln auf ein neues{" "}
          <span className="underline">Level</span>
        </blockquote>
      </h1>
      <CTAButton text="kostenlose Teststunde vereinbaren" to="/Kontakt" />
    </Layout>
  )
}

export default Home
