const { BlogPost, User, Category } = require('../models');

const getPostService = async () => {
    const returnDB = await BlogPost.findAll({ include: [{
        model: User,
        as: 'user',
        required: false,
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
    }] });
    return returnDB;
};

module.exports = getPostService;