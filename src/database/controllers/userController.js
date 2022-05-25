const jwt = require('jsonwebtoken');
const { userCreate, getAllUserService, getUserByIdService } = require('../services/userService');
const User = require('../models/user');

const secret = process.env.JWT_SECRET; 
const userController = async (req, res, _next) => {    
   try {
       const { displayName, email, password, image } = req.body;
        const createUser = await userCreate(displayName, email, password, image);
        const jwtConfig = {
            expiresIn: '8d',
            algorithm: 'HS256',
        };
        const token = jwt.sign({ data: User }, secret, jwtConfig);
        if (createUser) return res.status(201).json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'erro - controller user', error: err.message });
    }
};

const getUserController = async (req, res, _next) => {
    try {
        const returnDB = await getAllUserService();
        return res.status(200).json(returnDB);
    } catch (err) {
        return res.status(500).json({ message: 'erro - controller Getuser', error: err.message });
    }
};

const getUserControllerByID = async (req, res, _next) => {
    try {
    const { id } = req.params;
    const returDB = await getUserByIdService(id);
    if (!returDB) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(returDB);
    } catch (err) {
        return res.status(500).json({ mesage: 'erro - controller GetUserById', erro: err.message });
    }
};

module.exports = {
    userController,
    getUserController,
    getUserControllerByID,
};