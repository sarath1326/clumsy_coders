

const express = require("express");
const router = express();

const projectModel = require("../Model/projectModel")




router.post("/addnewproject", async (req, res) => {

    let { data, tools } = req.body


    try {



        const final = new projectModel({

            name: data.name,
            dis: data.dis,
            repo: data.repo,
            tools: tools


        })

        await final.save().then(() => {

            res.json({ flag: true })
        })

    } catch (error) {

        res.json({ flag: false })

    }




})


router.get("/allprojects", async (req, res) => {

    try {

        let data= await projectModel.find()

        console.log(data)

        res.json({flag:true,data:data})

    } catch (error) {

        res.json({flag:false,msg:error})

    }



    // await projectModel.find().then((respo) => {

    //     res.json({ flag: true, data: respo })

    // }).catch(err => {

    //     res.json({ flag: false, msg: err })
    
    // })

})










module.exports = router