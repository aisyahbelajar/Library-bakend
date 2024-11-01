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
    const authorId = req.params.id;
    const updatedAuthor = await Author.findByIdAndUpdate(authorId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedAuthor) {
      return res.status(404).json({ message: "Penulis tidak ditemukan" });
    }

    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAuthorById = async (req, res) => {
  try {
    const authorId = req.params.id;
    const deletedAuthor = await Author.findByIdAndDelete(authorId);
    if (!deletedAuthor)
      return res.status(404).json({ message: "Author not found" });
    res.status(200).json({ message: "Author deleted successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};
