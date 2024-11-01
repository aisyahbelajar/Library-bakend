const Author = require("../models/author");

exports.getAllAuthors = async (req, res) => {
  try {
    const author = await Author.find();
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAuthor = async (req, res) => {
  const author = new Author(req.body);
  try {
    const savedAuthor = await author.save();
    res.status(200).json(savedAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateAuthorById = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params, req.body, {
      new: true,
    });
    if (!updatedAuthor)
      return res.status(404).json({ message: "author not found" });
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAuthorById = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params);
    if (!deletedAuthor)
      return res.status(404).json({ message: "Author not found" });
    res.status(200).json({ message: "Author deleted successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};
