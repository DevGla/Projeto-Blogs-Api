const express = require('express');
const bodyParser = require('body-parser');
const loginController = require('./database/controllers/loginController');
const loginMiddleware = require('./database/middlewares.js/loginMiddleware');
const userMiddleware = require('./database/middlewares.js/userMiddleware');
const userController = require('./database/controllers/userController');
// ...

const app = express();
app.use(bodyParser.json());

app.post('/login', loginMiddleware, loginController);
app.post('/user', userMiddleware, userController);

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
