const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home page',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/login', (req, res) =>
    res.oidc.login({
      returnTo: '/profile',
      authorizationParams: {
        redirect_uri: 'http://localhost:3000/callback',
      },
    })
);

router.get('/profile', requiresAuth(), function (req, res, next) {
  console.log("Our user is: ", req.oidc.user);

  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

module.exports = router;
