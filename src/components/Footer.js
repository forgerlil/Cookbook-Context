import React from 'react';
import Reviews from '../reviews.json';
import './footer.css';

function Footer() {
  let { reviews } = Reviews;

  return (
    <footer>
      <div className='footer'>
        <div className='footerComponent'>
          {reviews.map((r, index) => (
            <div key={index}>
              <h3>"{r.quote}"</h3>
              <p>{r.name}</p>
              <p>{r.year}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
