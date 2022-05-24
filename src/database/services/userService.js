const { User } = require('../models');

const userService = async (email, _password) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const userCreate = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

module.exports = {
    userService,
    userCreate,
};