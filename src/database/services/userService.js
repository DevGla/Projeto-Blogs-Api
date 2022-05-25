const { User } = require('../models');

const userService = async (email, _password) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const userCreate = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

const getAllUserService = async () => {
    const getAllUser = await User.findAll({
        attributes: { exclude: ['password'] },
      });
    return getAllUser;
};

const getUserByIdService = async (id) => {
    console.log(id);
    const getUserByID = await User
    .findOne({ where: { id }, attributes: { exclude: ['password'] } });
    console.log('getUserByID');
    return getUserByID;
};

module.exports = {
    userService,
    userCreate,
    getAllUserService,
    getUserByIdService,
};