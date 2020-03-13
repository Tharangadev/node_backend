const router=require('express').Router()


 router.get('/login',(req,res,send)=>{
    res.json({
    	name:"apple"
    })
 })

module.exports=router