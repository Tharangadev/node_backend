var  router=require('express').Router()

router.use('/',require('./users'))

router.use((err,req,res,next)=>{

})

module.exports =router