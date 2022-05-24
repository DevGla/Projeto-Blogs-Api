const { userService } = require('../services/userService');

const validEmail = /\S+@\S+.\S+/;

const userMiddleware = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    if (!validEmail.test(email)) {
        return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }
    const verifyUser = await userService(email);
    if (verifyUser) return res.status(409).json({ message: 'User already registered' });
      next();
};
module.exports = userMiddleware;