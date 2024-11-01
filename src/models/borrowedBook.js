const mongoose = require("mongoose");

const borrowedBookSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  borrowerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Borrower",
    require: true,
  },
  borrowedAt: { type: Date, default: Date.now },
  expectedReturnAt: { type: Date },
  returnAt: { type: Date },
});

module.exports = mongoose.model("borrowedBook", borrowedBookSchema);
