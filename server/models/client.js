const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    sessionType: String,
    sessionDate: Date,
    quote: Number,
    paid: Boolean,
    specialRequests: String
});

module.exports = mongoose.model("Client", clientSchema);
