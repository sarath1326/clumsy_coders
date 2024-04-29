

const mongoose=require("mongoose")

require("dotenv").config();




 const connect=async()=>{


    mongoose.connect(process.env.DB_URL).then(()=>{

           console.log("DB connected")
    }
    
    ).catch(err=>{

         console.log("DB connected filed"+err)
    })

     
}


module.exports=connect