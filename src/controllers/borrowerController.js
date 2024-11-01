// src/controllers/borrowerController.js
const Borrower = require("../models/borrower");

// Mendapatkan daftar peminjam
exports.getAllBorrowers = async (req, res) => {
  try {
    const borrowers = await Borrower.find();
    res.status(200).json(borrowers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching borrowers", error });
  }
};

// Mendapatkan detail peminjam berdasarkan ID
exports.getBorrowerById = async (req, res) => {
  try {
    const borrower = await Borrower.findById(req.params.id);
    if (!borrower)
      return res.status(404).json({ message: "Borrower not found" });
    res.status(200).json(borrower);
  } catch (error) {
    res.status(500).json({ message: "Error fetching borrower", error });
  }
};

// Menambah peminjam baru
exports.createBorrower = async (req, res) => {
  try {
    const borrower = new Borrower(req.body);
    await borrower.save();
    res.status(201).json(borrower);
  } catch (error) {
    res.status(400).json({ message: "Error creating borrower", error });
  }
};

// Memperbarui data peminjam
exports.updateBorrower = async (req, res) => {
  try {
    const borrowerId = req.params.id;
    const borrower = await Borrower.findByIdAndUpdate(borrowerId, req.body, {
      new: true,
    });
    if (!borrower)
      return res.status(404).json({ message: "Borrower not found" });
    res.status(200).json(borrower);
  } catch (error) {
    res.status(400).json({ message: "Error updating borrower", error });
  }
};

// Menghapus peminjam
exports.deleteBorrower = async (req, res) => {
  try {
    const borrowerId = req.params.id;
    const borrower = await Borrower.findByIdAndDelete(borrowerId);
    if (!borrower)
      return res.status(404).json({ message: "Borrower not found" });
    res.status(200).json({ message: "Borrower deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting borrower", error });
  }
};
