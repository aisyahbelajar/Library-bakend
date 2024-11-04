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

exports.penalty = async (req, res) => {
  try {
    const data = await BorrowedBook.findById(req.params.id)
      .populate("bookId")
      .populate("borrowerId");
    if (!data) res.status(400).json({ message: "id not found" });
    const finePerDay = 20000;
    const borrowedDate = new Date(data.borrowedAt);
    const returnedDate = new Date(data.returnAt);
    const lateDays =
      Math.ceil((returnedDate - borrowedDate) / (1000 * 60 * 60 * 24)) - 7;
    if (lateDays <= 0) {
      return res
        .status(200)
        .json({ message: "Thank you for returning the book on time" });
    } else {
      const fineResult = lateDays * finePerDay;
      res.status(200).json({
        message: `You have returned the book ${lateDays} days late. Your fine is ${fineResult} rupiah.`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
