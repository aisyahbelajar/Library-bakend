const mongoose = require("mongoose");

const BookCategorySchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

BookCategorySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});
BookCategorySchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

module.exports = mongoose.model("BookCategory", BookCategorySchema);
