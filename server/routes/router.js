

const express=require("express");
const router=express();
const joinReqMail=require("../Email/joinmail")
const contactMail=require("../Email/contact")

router.post("/join",(req,res)=>{


    joinReqMail(req.body.values).then(()=>{

          res.json({flag:true})
    }).catch(err=>{

         res.json({flag:false})
    })

})

router.post("/contact",(req,res)=>{


    contactMail(req.body.values).then(()=>{

        res.json({flag:true})

         
    }).catch(err=>{

        res.json({flag:false})


    })

      
})







module.exports=router

