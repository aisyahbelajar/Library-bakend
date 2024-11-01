const express = require("express");
const borrowedController = require("../controllers/borrowedController");
const borrowedRoutes = express.Router();

borrowedRoutes.get("test/borrowers", borrowedController.getAllborrowed);
borrowedRoutes.get("test/borrowers/:id ", borrowedController.getborrowedById);
borrowedRoutes.post("test/borrowers", borrowedController.createborrowed);
borrowedRoutes.put(
  "test/borrowers/:id ",
  borrowedController.updateborrowedById
);
borrowedRoutes.delete(
  "test/borrowers/:id ",
  borrowedController.deleteborrowedById
);

module.exports = borrowedRoutes;
