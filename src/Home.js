import React from "react"
import Footer from "./Footer"
import "./App.css"

export default function Home() {
  return (
    <div className="Home">
      <div className="content-wrapper">
        <div className="header">
          <div className="title">POE</div>
          <div className="subtitle">A Rock Opera Musical</div>
        </div>
          <button className="tickets-button">BUY TICKETS</button>

        <div className="quote-container">
          <div className="quote">“Mesmerizing,</div>
          <div className="quote-text">
            This is a filler text where we will be putting in a quote or
            something.” -Someone
          </div>
        </div>

        <div className="body">
          <div className="box-container">
            <div className="box-content-card">
            <div className="box-content-card-image image1"></div>    
              <h3>Keep a piece of us with you</h3>
              <p>Check out our latest apparel, accessories, and more.</p>
              <button className="click-here-button">CLICK HERE</button>
            </div>
            <div className="box-content-card">
            <div className="box-content-card-image image2"></div>    
              <h3>Keep a piece of us with you</h3>
              <p>Check out our latest apparel, accessories, and more.</p>
              <button className="click-here-button">CLICK HERE</button>
            </div>
            <div className="box-content-card">
            <div className="box-content-card-image image3"></div>        
                  <h3>Keep a piece of us with you</h3>
              <p>Check out our latest apparel, accessories, and more.</p>
              <button className="click-here-button">CLICK HERE</button>
            </div>
          </div>
        </div>
      </div>
      <div />
      <Footer />
    </div>
    
  )
}
