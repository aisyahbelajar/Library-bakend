const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("authorId");
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("authorId");
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    const savedBook = await book.save();
    res.status(200).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
    });
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.messsage });
  }
};
