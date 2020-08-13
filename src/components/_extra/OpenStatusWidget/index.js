import React from 'react';

import './style.css';

const OpenStatusWidget = ({ inline }) => {
  return (
    inline && (
      <div className='open-status-widget inline'>
        <div class='row'>
          <span className='open-status-widget__header row'>
            Luni - Vineri
          </span>
          <span className='open-status-widget__content'>
            09-18
          </span>
        </div>
        <div className='row'>
          <span className='open-status-widget__header row'>
            Sâmbătă - Duminică
          </span>
          <span className='open-status-widget__content'>
            Închis
          </span>
        </div>
      </div>
    ) || (
      <div className='open-status-widget'>
        <span className='open-status-widget__header row'>
          Luni - Vineri
        </span>
        <span className='open-status-widget__content row'>
          09-18
        </span>
        <span className='open-status-widget__header row'>
          Sâmbătă - Duminică
        </span>
        <span className='open-status-widget__content row'>
          Închis
        </span>
      </div>
    )
  );
}

export default OpenStatusWidget;