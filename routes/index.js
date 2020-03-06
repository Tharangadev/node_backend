var router=require('express').Router()

router.use('/api',(req,res,next)=>{
    console.log(res)
})

module.exports =router