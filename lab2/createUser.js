var request = require("request");

var options = {
  method: 'POST',
  url: 'https://dev-nyorf3zewdjoe8fk.us.auth0.com/api/v2/users',
  headers: {
    'content-type': 'application/json',
    'authorization': 'Bearer-----------'
  },
  body: JSON.stringify({
    "email": "----@gmail.com",
    "user_metadata": {},
    "blocked": false,
    "email_verified": true,
    "app_metadata": {},
    "given_name": "Denis",
    "family_name": "KRadcekmo",
    "name": "dionis",
    "nickname": "panok",
    "user_id": "kjsadgfyu38462",
    "connection": "Username-Password-Authentication",
    "password": "12345qwertYY",// вже змінений в іншій лабораторній
    "verify_email": false,
    // "username": "Pan_Dionis"
  })
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


// got {"blocked":false,"created_at":"2023-11-17T14:18:24.692Z","email":"den673883@gmail.com","email_verified":true,"family_name":"KRadcekmo","given_name":"Denis","identities":[{"user_id":"kjsadgfyu3846","connection":"Username-Password-Authentication","provider":"auth0","isSocial":false}],"name":"string","nickname":"panok","picture":"https://s.gravatar.com/avatar/dda5b2b383de9ae653f10ff3782f6c8b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fst.png","updated_at":"2023-11-17T14:18:24.692Z","user_id":"auth0|kjsadgfyu3846","user_metadata":{}}