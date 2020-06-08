const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// name, badge number, police department, city, county, state
const officerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for officer"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Officer = mongoose.model("Officer", officerSchema);

module.exports = Officer;
