

const mongoose=require("mongoose")



const project=new mongoose.Schema({

      
         name:String,
         dis:String,
         repo:String,
         tools:Array

})


const project_model=mongoose.model("openproject",project)

module.exports=project_model

