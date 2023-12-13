const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const port = 3000;


const AUTH_HEADER = "Authorisation";
const CLIENT_SECRET = 'venllPl9Yzh9qxIMRdi-LBTsUjpLz2dkfP-ijCTic6DyQgalmYFy1Aki6_hLZ0rm';
const CLIENT_ID = 'WZfSscnhGy0k9XUmC7jag7G1pNhiq0KX';
const DOMAIN  = 'dev-nyorf3zewdjoe8fk.us.auth0.com';
const AUDIENCE ='https://dev-nyorf3zewdjoe8fk.us.auth0.com/api/v2/';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    if (req.userId) {
        return res.json({
            userId: req.userId,
            logout: 'http://localhost:3000/logout',
        });
    }
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/logout', (req, res) => {

    res.redirect('/');
});

app.post('/api/login', (req, res) => {
    const { login, password } = req.body;

    const getUserAccessTokenRequest = {
        method: 'POST',
        url: `https://${DOMAIN}/oauth/token`,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        form: {
            audience: AUDIENCE,
            grant_type: 'password',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            username: login,
            password: password,
            scope: 'offline_access',
        },
    };

    request(getUserAccessTokenRequest, (error, response, body) => {
        if (error) {
            res.status(401).send();
            return;
        }
        if (response.statusCode === 200) {
            const responseBody = JSON.parse(body);
            console.log('/api/login:', responseBody);
            res.status(200).json({
                token: body.access_token
            });
        } else {
            res.status(response.statusCode).send('Login failed');
        }    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
