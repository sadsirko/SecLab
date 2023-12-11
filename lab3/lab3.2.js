var request = require("request");

var options = { method: 'POST',
url: 'https://dev-nyorf3zewdjoe8fk.us.auth0.com/oauth/token',
headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form:
   { grant_type: 'refresh_token',
   client_id: 'WZfSscnhGy0k9XUmC7jag7G1pNhiq0KX', // Ваш Client ID
   client_secret: 'client_secret', // Ваш Client Secret
   refresh_token: 'KsXr24ynovtr916uVi-p1E0f9bosJTMRg4P90BkRaUnG6'}
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
// {"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZXZ1RFckE1TWZWMmczclBuandSQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1ueW9yZjN6ZXdkam9lOGZrLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHxranNhZGdmeXUzODQ2IiwiYXVkIjoiaHR0cHM6Ly9kZXYtbnlvcmYzemV3ZGpvZThmay51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcwMDU2NTY2MCwiZXhwIjoxNzAwNjUyMDYwLCJhenAiOiJXWmZTc2NuaEd5MGs5WFVtQzdqYWc3RzFwTmhpcTBLWCIsInNjb3BlIjoicmVhZDpjdXJyZW50X3VzZXIgdXBkYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBkZWxldGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGNyZWF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmN1cnJlbnRfdXNlcl9pZGVudGl0aWVzIG9mZmxpbmVfYWNjZXNzIiwiZ3R5IjpbInJlZnJlc2hfdG9rZW4iLCJwYXNzd29yZCJdfQ.ONsdb--vyC5nHhNEw7x1dKb4PHlofoFbRyYpH0sJsRRbATriZWtLjBYyW2Sxvnnn3viNRIGI5cvXPEZ16htbfcXHyW-zBCNjhwOuvjgt6vzHdeOoXMCil2tqbs1tB-LPeQu84yfgvWbeywpqrGvwgSiJWIX9dry_nNr96jIl58NTVG2f9XLyf1V8k7wstWlvtvJOV8D_NSsSjoQdaWkZjRX0-VIoch3a620QZFkQJYzzQkb4Mg-Fc6c8Oq8-TnWlLoxKjs8vTgZk7TDWS5nrL6rGrlMcW22zvrLLEPSF6h26IAM8bDQxON8Oi67Z-WF_eI0KEp_Ub62HC80jJXnBoA","scope":"read:current_user update:current_user_metadata delete:current_user_metadata create:current_user_metadata create:current_user_device_credentials delete:current_user_device_credentials update:current_user_identities offline_access","expires_in":86400,"token_type":"Bearer"}