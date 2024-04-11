

const express=require("express");
const router=express();
const joinReqMail=require("../Email/joinmail")

router.post("/join",(req,res)=>{


    joinReqMail(req.body.values).then(()=>{

          res.json({flag:true})
    }).catch(err=>{

         res.json({flag:false})
    })

})







module.exports=router

