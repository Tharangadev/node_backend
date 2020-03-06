const router=require('express').router

router.get('/',(req,res,next)=>{ 
    res.json({
        service:"ok"
    })
})

module.exports=router