const { Category } = require('../models');

const createCategoriesService = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

module.exports = createCategoriesService;