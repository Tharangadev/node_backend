var passport=require('passport')
var passLocalStrategy=require('passport-local').Strategy

const fakeUser={
	name:"somename",
	password:"somename"
}

passport.use(new passLocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd',
    session: false
  },function(username,passward){
	 if(username==fakeUser.name && passward==fakeUser.passward){
	 	return done(null,fakeUser)
	 }else{
	 	return done("dosent exsists")
	 }
}))