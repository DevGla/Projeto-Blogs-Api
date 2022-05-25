const createCategoriesService = require('../services/categoriesService');

const createCategoriesController = async (req, res, _next) => { 
    try {
        const { name } = req.body;
        const returnDB = await createCategoriesService.createCategoriesService(name);
        return res.status(201).json(returnDB);
    } catch (err) {
        return res.status(400).json({ message: 'Err - categoriesController', err: err.message });
    }
};

const getCategoriesController = async (req, res, _next) => {
    try {
        const returnDB = await createCategoriesService.getCategoriesService();
        return res.status(200).json(returnDB);
    } catch (err) {
        return res.status(400)
        .json({ message: 'erro - getCategoriesController', err: err.message });
    }
};

module.exports = {
    createCategoriesController,
    getCategoriesController,
};