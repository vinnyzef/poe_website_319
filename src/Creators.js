import "./App.css"
import React from "react"
import Footer from "./Footer"
import Chan from "./img/chanPoling.webp"
import John from "./img/JohnMunson.jpg"
import Kenni from "./img/kenniHolmen.jpg"
import BLRR from "./img/blrr2.png"

const cardsData = [
  {
    image: Chan,
    name: "Chan Poling",
    description:
      "Chan Poling is a songwriter, bandleader, composer of theatrical, television and film scores, and a seasoned performer...",
  },
  {
    image: John,
    name: "John Munsson",
    description:
      "John Munson is an American musician who is best known as the bass player for Semisonic. He was also a member of Trip Shakespeare during the late 1980s and early 1990s...",
  },
  {
    image: Kenni,
    name: "Kenni Holmen",
    description:
      "Kenni Holmen is one of the most active recording and touring musicians from the Twin Cities area. Kenni has performed and recorded with many local, national and international artists over his twenty year career...",
  },
  {
    image: BLRR,
    name: "Studio and Engineer",
    description:
      "Blue Lagoon Recording Room is a professional recording studio in Rochester Minnesota...",
  },
]

const CardList = () => {
  return (
    <>
      {cardsData.map((card, index) => (
        <div className="box-content-card" key={index}>
          <div className="box-content-card-image">
            <img src={card.image} className="card-img-top" alt={card.name} />
          </div>
          <h3>{card.name}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </>
  )
}
export default function Creators() {
  return (
    <>
      <div className="box-container Home">
        <div className="header">
          <div className="title">Creators</div>
          <div className="quote-text mt-5">
            Meet the brilliant minds behind the magic! <br></br>
            Get to know the creators of Poe, the visionaries who brought this
            captivating story to life.
          </div>
        </div>
        <div className="container mt-5">
          <div className="row row-cols-2 g-3">{CardList()}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
