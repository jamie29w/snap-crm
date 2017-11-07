const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    sessionType: String,
    sessionDate: String,
    sessionTime: String,
    quote: Number,
    paid: Boolean,
    specialRequests: String
});

module.exports = mongoose.model("Client", clientSchema);
