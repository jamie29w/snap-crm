const express = require("express");
const clientRoutes = express.Router();
const Client = require("../models/client");
require('dotenv').config()

app.use(express.static(path.join(__dirname, "client", "build")));

clientRoutes.get("/", (req, res) => {
    Client.find(req.query, (err, foundClients) => {
        if (err) return res.status(500).send(err);
        return res.send(foundClients);
    });
});

clientRoutes.get("/:id", (req, res) => {
    Client.findById(req.params.id, (err, foundClient) => {
        if (err) return res.status(500).send(err);
        return res.send(foundClient);
    });
});

clientRoutes.post("/", (req, res) => {
    const newClient = new Client(req.body);
    newClient.save((err, postedClient) => {
        if (err) return res.status(500).send(err);
        return res.send(postedClient);
    });
});

clientRoutes.delete("/:id", (req, res) => {
    Client.findByIdAndRemove(req.params.id, (err, deletedClient) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedClient);
    });
});

clientRoutes.put("/:id", (req, res) => {
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

clientRoutes.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

module.exports = clientRoutes;
