const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
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

bookSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});
bookSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

module.exports = mongoose.model("Book", bookSchema);
