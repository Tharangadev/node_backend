let jwt = require("express-jwt");
let secret = require("../config").secret;

function getToken(req) {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }

  return null;
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: "payload",
    getToken: getToken
  }),
  optional: jwt({
    secret: secret,
    userProperty: "payload",
    credentialsRequired: false,
    getToken: getToken
  })
};

module.exports = auth;
