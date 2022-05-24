const { User } = require('../models');

const loginService = async (email, _password) => {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    return user;
};

module.exports = loginService;