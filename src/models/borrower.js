const { default: mongoose } = require("mongoose");

const borrowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  joinAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Borrower", borrowerSchema);
