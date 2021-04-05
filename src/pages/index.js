import React from "react"
import { Link } from "gatsby"
import CTAButton from "../components/CTAButton"
import Layout from "../components/Layout"
import "../style/Home.scss"
import Button2 from "../components/Button2"
import ButtonLight from "../components/Buttonlight"
import { FaDrum } from "react-icons/fa"
import { AiOutlineTeam } from "react-icons/ai"
import OnlineLesson from "../components/OnlineLesson"

const Home = () => {
  return (
    <Layout>
      <div className="content">
        <h1>
          Du kannst gar nicht trommeln? <br></br>{" "}
          <span className="h1Plus">
            Drum Up beweist dir das{" "}
            <span className="underline">Gegenteil!</span>
          </span>
        </h1>

        <OnlineLesson />

        <div className="cards">
          <Link to="/unterricht" className="home">
            <div className="card card-hover">
              <div className="card-top">
                <h2>
                  <FaDrum /> Unterricht
                </h2>
              </div>
              <div className="card-content">
                <p>
                  Ob Anfänger oder Profi, ich bringe dein Trommeln auf ein neues{" "}
                  Level.
                </p>
                <Button2 to="/unterricht" text="Unterricht . . ."></Button2>
              </div>
            </div>
          </Link>
          <Link to="/teamtraining" className="home">
            <div className="card card-hover">
              <div className="card-top">
                <h2>
                  <AiOutlineTeam /> Teamtraining
                </h2>
              </div>
              <div className="card-content">
                <p>
                  Drum UP Teamtraining nutzt Energie und gruppendynamische
                  Prozesse einer (Trommel)Band, um mit Mitarbeitern, Kunden,
                  Gästen, Kindern, Schülern oder Vereinsmitgliedern ein
                  kraftvolles Erlebnis zu erschaffen.
                </p>

                <Link to="/teamtraining">
                  <ButtonLight>Teamtraining . . .</ButtonLight>
                </Link>
              </div>
            </div>
          </Link>
        </div>
        <CTAButton text="kostenlose Teststunde vereinbaren" to="/kontakt" />

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

        <div className="card1">
          <div class="card__content">
            <div class="card__front">
              <h3 class="card__title">The Fair</h3>
              <p class="card__subtitle">Time for some fun</p>
            </div>

            <div class="card__back">
              <p class="card__body">
                This would be some longer text that gives a description of the
                things from the other side I guess
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
