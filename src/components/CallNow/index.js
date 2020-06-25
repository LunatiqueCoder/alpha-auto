import React from 'react';

import './style.css'

const CallNowSection = () => {
    return(
      <a href="tel:+40722 968 318">
      <div className="col-12 call-now-section">
          <span className="phone-number-container">
            Sună acum!
          </span>
        </div>
      </a>
     )

}

export default CallNowSection;
