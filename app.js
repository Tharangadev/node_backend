const   http = require("http");
		path = require("path");
		methods = require("methods");
		express = require("express");
		session = require("express-session");
		cors = require("cors");
		passport = require("cors");
		errorhandler = require("errorhandler");
		morgan=require('morgan')

let isProduction = process.env.NODE_ENV == "production";

let app = express();
app.use(morgan('dev'))

app.use(cors());

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`listenning to port ${server.address().port}`);
});
