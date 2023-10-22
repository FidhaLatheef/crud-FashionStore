var express=require('express');
var router=express.Router();

router.post('/',(req,res)=>{
    const num1=parseInt(req.body.num1);
    const num2=parseInt(req.body.num2);
    const sum=num1+num2;
    res.send({ sum: sum});

   
});
module.exports=router;