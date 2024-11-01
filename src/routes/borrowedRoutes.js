const express = require("express");
const borrowedController = require("../controllers/borrowedController");
const borrowedRoutes = express.Router();

borrowedRoutes.get(
  "test/borrow/list",
  borrowedController.getActiveBorrowedBooks
);
borrowedRoutes.post("test/borrow/book", borrowedController.borrowBook);
borrowedRoutes.post("test/borrow/book/return ", borrowedController.returnBook);

module.exports = borrowedRoutes;
