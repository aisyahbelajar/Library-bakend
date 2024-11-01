const express = require("express");
const authorRoutes = express.Router();
const authorController = require("../controllers/authorController");

authorRoutes.get("/test/authors", authorController.getAllAuthors);
authorRoutes.get("/test/author/:id", authorController.getAuthorById);
authorRoutes.post("/test/author", authorController.createAuthor);
authorRoutes.put("/test/author/:id", authorController.updateAuthorById);
authorRoutes.delete("/test/author/:id", authorController.deleteAuthorById);

module.exports = authorRoutes;
