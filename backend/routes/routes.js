const express = require('express');
const router = express.Router();
const messageTemplate = require('../models/msg');

router.post('/messages', (request, response) => {
  const sentMessage = new messageTemplate({
    message: request.body.message
  })
  sentMessage.save()
  .then(data => {
    response.json(data)
  })
  .catch(error => {
    response.json(error)
  })
});

router.get('/messages', (request, response) => {
  messageTemplate.find().then((messages) => {
    response.status(200).json(messages)
  });
});

router.delete('/messages/:messageId', (request, response) => {
  messageTemplate.findByIdAndDelete({ _id: request.params.messageId }, (err, msg) => {
    if(!msg) {
      response.status(404).json({ error: 'The message could not be found!' });
    } else {
      response.status(204).json({ message: 'Message deleted!' });
    }
  })
});

module.exports = router;