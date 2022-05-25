const { Category } = require('../models');

const createCategoriesService = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const getCategoriesService = async () => {
    const getAllCategories = await Category.findAll();
    return getAllCategories;
};

module.exports = { createCategoriesService, getCategoriesService };