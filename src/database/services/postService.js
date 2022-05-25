const { BlogPost } = require('../models');

const getPostService = async () => {
    const returnDB = await BlogPost.findAll();
    console.log(returnDB);
    return returnDB;
};

module.exports = getPostService;