import React from "react"
import { Link } from "gatsby"
import CTAButton from "../components/CTAButton"
import Layout from "../components/Layout"
import "../style/Home.scss"
import Button2 from "../components/Button2"
import ButtonLight from "../components/Buttonlight"

const Home = () => {
  return (
    <Layout>
      <div className="content">
        <div className="subHeader">Schlagzeugunterricht vom Profi</div>
        <h1>
          <blockquote>
            Ich bringe ihr Trommeln auf ein neues{" "}
            <span className="underline">Level</span>
          </blockquote>
        </h1>
        <CTAButton text="kostenlose Teststunde vereinbaren" to="/kontakt" />
        <div className="cards">
          <div className="card card-hover home">
            <div className="card-top">
              <h2>Unterricht</h2>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                blanditiis obcaecati, nesciunt quasi totam modi dignissimos
                voluptatem iusto unde quam.
              </p>
              <Button2 to="/unterricht" text="Unterricht"></Button2>
            </div>
          </div>
          <div className="card card-hover home">
            <div className="card-top">
              <h2>Teamtraining</h2>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                blanditiis obcaecati, nesciunt quasi totam modi dignissimos
                voluptatem iusto unde quam.
              </p>
              <ButtonLight>
                <Link to="/teamtraining">Teamtraining</Link>
              </ButtonLight>
            </div>
          </div>
        </div>

        <div className="card card-hover flex">
          <div className="card-left">
            <h2>Menu</h2>
            <li>Punkt 1</li>
            <li>Punkt 2</li>
            <li>Punkt 3</li>
            <li>Punkt 4</li>
          </div>
          <div className="card-right">
            <h2>Card 3</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
