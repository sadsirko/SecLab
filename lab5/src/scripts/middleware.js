const { auth, UnauthorizedError } = require('express-oauth2-jwt-bearer');
require('dotenv-expand').expand(require('dotenv').config());
// Object.assign(process.env,{DOMAIN:'dev-nyorf3zewdjoe8fk.us.auth0.com',AUDIENCE:'https://dev-nyorf3zewdjoe8fk.us.auth0.com/api/v2/',
//     CLIENT_ID:'WZfSscnhGy0k9XUmC7jag7G1pNhiq0KX',CLIENT_SECRET:'venllPl9Yzh9qxIMRdi-LBTsUjpLz2dkfP-ijCTic6DyQgalmYFy1Aki6_hLZ0rm'})

const addTokenFromCookieToHeadersMiddleware = (req, res, next) => {
    console.log(req.cookies)
    if (req.cookies.token) {
        req.headers.authorization = `Bearer ${req.cookies.token}`;
    }

    next();
};

const checkJwtMiddleware = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: `https://${process.env.DOMAIN}`,
});

const unauthorizedMiddleware = (err, req, res, next) => {
    console.log(err)
    if (err instanceof UnauthorizedError) {
        res.status(401).send(
            '<p>You need to log in first. Please, <a href="/">log in</a>.</p>'
        );
    } else {
        next(err);
    }
};

module.exports = {
    addTokenFromCookieToHeadersMiddleware,
    checkJwtMiddleware,
    unauthorizedMiddleware,
};
