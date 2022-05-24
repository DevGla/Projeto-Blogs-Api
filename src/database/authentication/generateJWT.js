const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '9d',
    algorithm: 'HS256',
};

const genereteJWT = (payload) => {
    const token = jwt.sign({ data: payload }, secret, jwtConfig);
    return token;
};

module.exports = genereteJWT;