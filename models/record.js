const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: "Anonymous"
  },
  officers: [
      {
          type: Schema.Types.ObjectId,
          ref: "Officer"
      }
  ],
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
