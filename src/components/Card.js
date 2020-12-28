import React from 'react';
import pin from '../images/pin.jpg';
import '../styles/card.css';

const card = props => {
  const {
    message
  } = props;

  return(
    <div className="message-card">
      <div className="pin-box">
        <img className="pin" alt="pin" src={pin}></img>
      </div>
      <div className="msg-box">
        <h5>{message}</h5>
      </div>
    </div>
  )
}

export default card;