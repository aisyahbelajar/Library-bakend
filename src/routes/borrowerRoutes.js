const express = require("express");
const borrowerController = require("../controllers/borrowerController");
const borrowerRoutes = express.Router();

borrowerRoutes.get("test/borrowers", borrowerController.getAllBorrowers);
borrowerRoutes.get("test/borrower/:id ", borrowerController.getBorrowerById);
borrowerRoutes.post("test/borrower", borrowerController.createBorrower);
borrowerRoutes.put("test/borrower/:id ", borrowerController.updateBorrower);
borrowerRoutes.delete("test/borrower/:id ", borrowerController.deleteBorrower);

module.exports = borrowerRoutes;
