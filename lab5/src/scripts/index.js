const {
    addTokenFromCookieToHeadersMiddleware,
    checkJwtMiddleware,
    unauthorizedMiddleware,
} = require('./middleware');
const { login, logout, getServerToken } = require('./route');
const path = require('path');
const request = require('request');
require('dotenv-expand').expand(require('dotenv').config());

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//public endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});

app.post('/api/login', (req, res) => login(req, res));

//middleware
app.use(addTokenFromCookieToHeadersMiddleware);
app.use(checkJwtMiddleware);
app.use(unauthorizedMiddleware);

//protected endpoints
app.get('/api/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/home.html'));
});
app.post('/api/logout', (req, res) => logout(req, res));
//
getServerToken();
setInterval(() => getServerToken(), 82800000); //23h

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
