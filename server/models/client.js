const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    sessionType: String,
    sessionLocation: String,
    sessionDate: Date,
    deposit: Number,
    depositPaid: Boolean,
    quote: Number,
    quotePaid: Boolean,
    specialRequests: String
});

module.exports = mongoose.model("Client", clientSchema);
