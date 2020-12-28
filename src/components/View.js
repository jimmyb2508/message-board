import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import '../styles/view.css';

function View() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/app/messages`)
      .then((response) => setMessages(response.data))
      .catch(err => console.log(err))
  }, []);
  return (
    <div className="view">
      {messages.map(message => (
        <Card key={message._id} {...message} />
      ))}
    </div>
  )
};

export default View;