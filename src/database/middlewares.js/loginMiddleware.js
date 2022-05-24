const loginService = require('../services/loginService');

const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }
        const returnBD = await loginService(email, password);
        if (!returnBD) {
            return res.status(400).json({ message: 'Invalid fields' });
        } 
        next();
};

module.exports = loginMiddleware;