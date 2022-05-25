const express = require('express');
const bodyParser = require('body-parser');
const loginController = require('./database/controllers/loginController');
const loginMiddleware = require('./database/middlewares.js/loginMiddleware');
const userMiddleware = require('./database/middlewares.js/userMiddleware');
const userController = require('./database/controllers/userController');
const validateJWT = require('./database/authentication/validateJWT');
// ...

const app = express();
app.use(bodyParser.json());

app.post('/login', loginMiddleware, loginController);
app.post('/user', userMiddleware, userController.userController);

app.get('/user/:id', validateJWT, userController.getUserControllerByID);
app.get('/user', validateJWT, userController.getUserController);

app.use(express.json());

// ...u

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
