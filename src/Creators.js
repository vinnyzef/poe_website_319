import "./App.css"
import React from "react"
import Footer from "./Footer"
import Chan from "./img/chanPoling.webp"
import John from "./img/JohnMunson.jpg"
import Kenni from "./img/kenniHolmen.jpg"
import BLRR from "./img/blrr.png"

export default function Creators() {
  return (
    <>
      <div className="creators">
        <div className="container-fluid mt-5">
          <div className="row row-cols-2 g-3">
            <div className="col-sm-12 col-md-6">
              <div className="card" style={{ width: "18rem;" }}>
                <img src={Chan} className="card-img-top" alt="Chan Poling" />
                <div className="card-body">
                  <h5 className="card-title">Chan Poling</h5>
                  <p className="card-text">
                    Chan Poling is a songwriter, bandleader, composer of
                    theatrical, television and film scores, and a seasoned
                    performer. His alternative rock band, The Suburbs, became a
                    touchstone of the “Minneapolis Sound” in the 1980s,
                    recording albums for Polygram and A&M Records.
                  </p>
                  <a
                    href="https://www.minnesotaorchestra.org/about/our-people/guest-conductors-artists/chan-poling/"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-dark"
                  >
                    Learn more about Chan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card" style={{ width: "18rem;" }}>
                <img src={John} className="card-img-top" alt="John Munson" />
                <div className="card-body">
                  <h5 className="card-title">John Munsson</h5>
                  <p className="card-text">
                    John Munson is an American musician who is best known as the
                    bass player for Semisonic. He was also a member of Trip
                    Shakespeare during the late 1980s and early 1990s.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/John_Munson"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-dark"
                  >
                    Learn more about John
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 g-3 mt-5">
            <div className="col-sm-12 col-md-6">
              <div className="card" style={{ width: "18rem;" }}>
                <img src={Kenni} className="card-img-top" alt="Kenni Holmen" />
                <div className="card-body">
                  <h5 className="card-title">Kenni Holmen</h5>
                  <p className="card-text">
                    Kenni Holmen is one of the most active recording and touring
                    musicians from the Twin Cities area. Kenni has performed and
                    recorded with many local, national and international artists
                    over his twenty year career.
                  </p>
                  <a
                    href="https://www.hornheads.com/kenni-holmen/"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-dark"
                  >
                    Learn more about Kenni
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card" style={{ width: "18rem;" }}>
                <img
                  src={BLRR}
                  className="card-img-top"
                  alt="Blue Lagoon Recording Room"
                />
                <div className="card-body">
                  <h5 className="card-title">Studio and Engineer</h5>
                  <p className="card-text">
                    Blue Lagoon Recording Room is a professional recording
                    studio in Rochester Minnesota
                  </p>
                  <a
                    href="https://bluelagoonrecordingroom.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-dark"
                  >
                    Learn More about Blue Lagoon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
