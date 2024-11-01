// src/controllers/borrowedBookController.js
const BorrowedBook = require("../models/borrowedBook");

// Menambah data peminjaman buku
exports.borrowBook = async (req, res) => {
  try {
    const borrowedBook = new BorrowedBook(req.body);
    await borrowedBook.save();
    res.status(201).json(borrowedBook);
  } catch (error) {
    res.status(400).json({ message: "Error borrowing book", error });
  }
};

// Mendapatkan daftar peminjaman buku yang masih aktif
exports.getActiveBorrowedBooks = async (req, res) => {
  try {
    const borrowedBooks = await BorrowedBook.find({ returnAt: null })
      .populate("bookId")
      .populate("borrowerId");
    res.status(200).json(borrowedBooks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching active borrowed books", error });
  }
};

// Menambah data pengembalian buku
exports.returnBook = async (req, res) => {
  try {
    const borrowedBook = await BorrowedBook.findById(req.body.borrowedBookId);
    if (!borrowedBook)
      return res
        .status(404)
        .json({ message: "Borrowed book record not found" });

    borrowedBook.returnAt = new Date(); // Set waktu pengembalian
    await borrowedBook.save();
    res
      .status(200)
      .json({ message: "Book returned successfully", borrowedBook });
  } catch (error) {
    res.status(400).json({ message: "Error returning book", error });
  }
};
