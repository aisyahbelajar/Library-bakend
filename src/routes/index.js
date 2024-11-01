const express = require("express");
const bookRoutes = require("./bookRoutes");
const authorRoutes = require("./authorRoutes");
const borrowedRoutes = require("./borrowedRoutes");
const borrowerRoutes = require("./borrowerRoutes");

const routes = express.Router();

// kumpulkan semua routes disini per bagian ex : /author,/books dll
routes.use(bookRoutes);
routes.use(authorRoutes);
routes.use(borrowedRoutes);
routes.use(borrowerRoutes);

module.exports = routes;
