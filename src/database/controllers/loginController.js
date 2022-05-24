const genereteJWT = require('../authentication/generateJWT');
const { userService } = require('../services/userService');

const loginController = async (req, res, _next) => {
    try {      
        const { email } = req.body;
        const returnDB = await userService(email);  
        const token = genereteJWT(returnDB);
        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'erro - controller login', error: err.message });
    }    
};

module.exports = loginController;