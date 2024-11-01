const express = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRoutes = express.Router();

categoryRoutes.get("test/categories", categoryController.getAllCategory);
categoryRoutes.get("test/xategory/:id ", categoryController.getCategoryById);
categoryRoutes.post("test/xategory", categoryController.createCategory);
categoryRoutes.put("test/xategory/:id ", categoryController.updateCategoryById);
categoryRoutes.delete(
  "test/xategory/:id ",
  categoryController.deleteCategoryById
);

module.exports = categoryRoutes;
