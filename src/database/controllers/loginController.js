const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = process.env.JWT_SECRET;

const loginController = async (req, res, _next) => {
    try {
        const jwtConfig = {
            expiresIn: '8h',
            algorithm: 'HS256',
        };
        const token = jwt.sign({ data: User }, secret, jwtConfig);
        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'erro - controller login', error: err.message });
    }    
};

module.exports = loginController;