const express = require("express");
const bookRoutes = express.Router();
const multer = require("multer");
const path = require("path");
const bookController = require("../controllers/bookController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

bookRoutes.get("/test/books", bookController.getAllBooks);
bookRoutes.get("/test/book/:id", bookController.getBookById);
bookRoutes.post("/test/book", bookController.createBook);
bookRoutes.put("/test/book/:id", bookController.updateBookById);
bookRoutes.delete("/test/book/:id", bookController.deleteBookById);
bookRoutes.post("/test/book/upload/:id", bookController.uploadBookCover);

module.exports = bookRoutes;
