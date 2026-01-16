const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  status: {
    type: String,
    enum: ["new", "contacted", "converted", "lost"],
    default: "new"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Lead", LeadSchema);
