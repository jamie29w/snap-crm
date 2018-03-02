const express = require('express');
const clientRoutes = express.Router();
const Client = require('../models/client');

clientRoutes.get('/', (req, res) => {
  Client.find({ user: req.user._id }, (err, foundClients) => {
    if (err) return res.status(500).send(err);
    return res.send(foundClients);
  });
});

clientRoutes.get('/:id', (req, res) => {
  Client.findOne(
    { user: req.user._id, _id: req.params.id },
    (err, foundClient) => {
      if (err) return res.status(500).send(err);
      return res.send(foundClient);
    }
  );
});

clientRoutes.post('/', (req, res) => {
  const newClient = new Client(req.body);
  newClient.user = req.user._id;
  newClient.save((err, postedClient) => {
    if (err) return res.status(500).send(err);
    return res.send(postedClient);
  });
});

clientRoutes.delete('/:id', (req, res) => {
  Client.findByIdAndRemove(req.params.id, (err, deletedClient) => {
    if (err) return res.status(500).send(err);
    return res.send(deletedClient);
  });
});

clientRoutes.put('/:id', (req, res) => {
  Client.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedClient) => {
      if (err) return res.status(500).send(err);
      return res.send(updatedClient);
    }
  );
});

module.exports = clientRoutes;
