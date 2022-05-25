const createCategoriesService = require('../services/categoriesService');

const categoriesController = async (req, res, _next) => { 
    try {
        const { name } = req.body;
        const returnDB = await createCategoriesService(name);
        return res.status(201).json(returnDB);
    } catch (err) {
        return res.status(400).json({ message: 'Err - categoriesController', err: err.message });
    }
};

module.exports = categoriesController;