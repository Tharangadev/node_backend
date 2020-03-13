const   http = require("http");
		path = require("path");
		methods = require("methods");
		express = require("express");
		session = require("express-session");
		cors = require("cors");
		passport = require("cors");
		errorhandler = require("errorhandler");
		morgan=require('morgan')
		router=require('./routes')
		dotenv=require('dotenv')
		admin=require('firebase-admin')
		

let isProduction = process.env.NODE_ENV == "production"
dotenv.config()

///firebase config 
admin.initializeApp({
	credentials:admin.credentials.cert({
		
	}),
	databaseUrl:'http:///node-hosting-96d5a.firebaseio.com'
})

let app = express();
app.use(morgan('dev'))

app.use(cors());
app.use(router)

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`listenning to port ${server.address().port}`);
});
