import React from 'react';
import style from './Highlights.module.css';

const HighlightsSection = () => {
  return (
    <div className={style.container}>
      <h3 className={style.breakdown}>Breakdown</h3>
      <ul className={style.listing}>
        <li>
          On average we help people eliminate their debt, including a mortgage, in as little as 5-7 years or less and retire with financial piece of mind. We show the client how to win the game before they play!
        </li>
        <li>
        Register by clicking the link below to learn how EquityXL™ can help you sell more life insurance that you ever thought possible!
        </li>
      </ul>
      <h5 className={style.subHeading}>Register now and get started!</h5>
      <h3 className={style.heading}>Brainwave.io</h3>

    </div>
  );
};

export default HighlightsSection;
