const express = require("express");
const bookRoutes = require("./bookRoutes");
const authorRoutes = require("./authorRoutes");

const routes = express.Router();

// kumpulkan semua routes disini per bagian ex : /author,/books dll
routes.use(bookRoutes);
routes.use(authorRoutes);

module.exports = routes;
