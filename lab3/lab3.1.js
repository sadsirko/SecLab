var request = require("request");

var options = {
  method: 'POST',
  url: 'https://dev-nyorf3zewdjoe8fk.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: {
    grant_type: 'client_credentials',
    username: 'den673883@gmail.com', 
    password: '12345qwertYY', 
    audience: 'https://dev-nyorf3zewdjoe8fk.us.auth0.com/api/v2/', 
    // scope: 'update:user', 
    client_id: 'WZfSscnhGy0k9XUmC7jag7G1pNhiq0KX', 
    client_secret: 'client_secret'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

// {"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZXZ1RFckE1TWZWMmczclBuandSQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1ueW9yZjN6ZXdkam9lOGZrLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHxranNhZGdmeXUzODQ2IiwiYXVkIjoiaHR0cHM6Ly9kZXYtbnlvcmYzemV3ZGpvZThmay51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcwMDU2NTI3NCwiZXhwIjoxNzAwNjUxNjc0LCJhenAiOiJXWmZTc2NuaEd5MGs5WFVtQzdqYWc3RzFwTmhpcTBLWCIsInNjb3BlIjoicmVhZDpjdXJyZW50X3VzZXIgdXBkYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBkZWxldGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGNyZWF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmN1cnJlbnRfdXNlcl9pZGVudGl0aWVzIG9mZmxpbmVfYWNjZXNzIiwiZ3R5IjoicGFzc3dvcmQifQ.N9BIZCrRzZRW3Wfa-XWIjRYKvRZ0MB3wSGY_bM0y8FkoggLssZUgzJ8azprzX59k7sVw9cvAkPH7TAtOrd4m10am18pBNc1aJUx5pMCxcXb28aTILqTqi4dIMX20APxRTAVzM8oBvEoYTqJJX0I31qGJIt42phLDxKL-piLoiCzKWlKPXUg_NXl3qPOosqBhNpKPrcyWR9bxREc9y7hy7SQe32uFe36r_ALRdy4nAdOK9x3sT67Ls6FmCnE4fmACjhlTjRTDzi2BtoeRX5malENO3iiqDX-zMwJpNp0Zz8bH6zRAuowLa5hs3_wkQ7nxReOn0NLyL951MkM2-7Cb7A","refresh_token":"KsXr24ynovtr916uVi-p1E0f9bosJTMRg4P90BkRaUnG6","scope":"read:current_user update:current_user_metadata delete:current_user_metadata create:current_user_metadata create:current_user_device_credentials delete:current_user_device_credentials update:current_user_identities offline_access","expires_in":86400,"token_type":"Bearer"}