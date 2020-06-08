const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// police dept
// pd Name (ex: LAPD, CPD< NYPD, Cook County Sheriff's)
// city
// county
// state
const pdSchema = new Schema({
    name: {
        type: String,
        trim: true,
        default: "Anonymous"
    },
    city: {
        type: String,
        trim: true,
        default: "N/A"
    },
    county: {
        type: String,
        trim: true,
        default: "N/A"
    },
    state: {
        type: String,
        trim: true,
        default: "N/A"
    }
});

const PD = mongoose.model("PD", pdSchema);

module.exports = PD;
