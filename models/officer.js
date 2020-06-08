const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// name, badge number, police department
const officerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: "Unknown"
  },
  badgeNumber: {
    type: String,
    trim: true,
    default: "Unknown"
  },
  policeDept : {
      type: Schema.Types.ObjectId,
      ref: "PD"
  }
});

const Officer = mongoose.model("Officer", officerSchema);

module.exports = Officer;
