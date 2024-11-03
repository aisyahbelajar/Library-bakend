const BorrowedBook = require("../models/borrowedBook");

exports.borrowBook = async (req, res) => {
  try {
    const borrowedBook = new BorrowedBook(req.body);
    await borrowedBook.save();
    res.status(201).json(borrowedBook);
  } catch (error) {
    res.status(400).json({ message: "Error borrowing book", error });
  }
};

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

exports.returnBook = async (req, res) => {
  try {
    const borrowedBook = await BorrowedBook.findByIdAndUpdate(req.params.id);
    if (!borrowedBook) {
      return res
        .status(404)
        .json({ message: "Data peminjaman buku tidak ditemukan" });
    }

    borrowedBook.returnAt = new Date();
    await borrowedBook.save();

    res
      .status(200)
      .json({ message: "Buku berhasil dikembalikan", borrowedBook });
  } catch (error) {
    res.status(400).json({ message: "Error saat mengembalikan buku", error });
  }
};
