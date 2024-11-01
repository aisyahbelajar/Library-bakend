const Category = require("../models/category");

exports.getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category tidak ditemukan" });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    const savedCategory = await category.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await Category.findByIdandUpdate(
      categoryId,
      req.body,
      {
        new: true,
        updatedAt: Date.now,
      }
    );
    if (!updatedCategory)
      return res.status(404).json({ message: "category not found" });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.deleteCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.findByIdanDelete(categoryId);
    if (!deletedCategory)
      return res.status(404).json({ message: "category not found" });
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
