import React from 'react';
import './App.css';
import Page from './Page'

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="header">
          <div className="title">POE</div>
          <div className="subtitle">A Rock Opera Musical</div>
        </div>
        <div className='button-container'>
        <button className='tickets-button'>BUY TICKETS</button>
        </div>

        <div className="quote-container">
          <div className="quote">“Mesmerizing,</div>
          <div className="quote-text">This is a filler text where we will be putting in a quote or something.” -Someone</div>
        </div>
        
        <div className="body">
          <div className='box-container'>
          <div className='box-content-card'>
          <div className='box-content-card-image'>

          </div>
          <h3>Keep a peice of us with you</h3>
          <p>Check out our latest apparel,
accessories and more.</p>
          </div>
          <div className='box-content-card'>
              <div className='box-content-card-image'>
            
          </div>
          <h3>Keep a peice of us with you</h3>
          <p>Check out our latest apparel,
accessories and more.</p>
          </div>
          <div className='box-content-card'>
          <div className='box-content-card-image'>
            
            </div>
            <h3>Keep a peice of us with you</h3>
            <p>Check out our latest apparel,
accessories and more.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page(App);
