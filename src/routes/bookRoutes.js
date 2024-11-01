const express = require("express");
const bookRoutes = express.Router();
const bookController = require("../controllers/bookController");

bookRoutes.get("/test/books", bookController.getAllBooks);
bookRoutes.get("/test/book/:id", bookController.getBookById);
bookRoutes.post("/test/book", bookController.createBook);
bookRoutes.put("/test/book/:id", bookController.updateBookById);
bookRoutes.delete("/test/book/:id", bookController.deleteBookById);

module.exports = bookRoutes;
