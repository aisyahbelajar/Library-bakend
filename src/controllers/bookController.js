const Book = require("../models/book");
const { errorMsg, errorName } = require("./utils");

const BookController = {};

BookController.create = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      throw { name: errorName.BAD_REQUEST, message: errorMsg.WRONG_INPUT };
    }
    const book = new Book({
      title,
      penulis,
      stok,
      kategori,
      sampul,
    });

    await book.save();
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

module.exports = BookController;
