const mongoose = require("mongose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
});

categorySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

categorySchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

module.exports = mongoose.model("Category", categorySchema);
