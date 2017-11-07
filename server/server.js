const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 8900;
const clientRoutes = require("./routes/clientRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/clients", clientRoutes);
app.use(morgan("dev"));

clients = [];

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://localhost/clients",
    { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
    err => {
        if (err) throw err;
        console.log("Don't droppa da base");
    }
);

app.listen(port, () => {
    console.log(`Kreacher has been watching port ${port}`);
});
