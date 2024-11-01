const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desciption: { type: String, required: true },
  summary: { type: String, required: true },
  stocks: [
    {
      book_identifier: { type: String, required: true },
      status: { type: String, required: true },
    },
  ],
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
