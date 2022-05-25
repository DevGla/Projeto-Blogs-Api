const getPostService = require('../services/postService');

const getPostController = async (req, res, _next) => {
    try {
        const returnDB = await getPostService();
        return res.status(200).json(returnDB);
    } catch (err) {
        return res.status(400).json({ message: 'Erro - getPostController', err: err.message });
    }
};

module.exports = getPostController;