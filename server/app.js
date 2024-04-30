

const express = require("express");
const app = express();
const router = require("./routes/router");
const projectRoute=require("./routes/projectRoute")
const cors = require("cors");
const DB=require("./Model/connect")




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
      origin: [ "https://clumsy-coders.onrender.com"  ],
      methods: ["GET", "POST"],
      credentials: true
}));

// "https://clumsy-coders.onrender.com"


// DB connecting func

 DB()



// contact and join route

app.use("/", router);   



// open source route

app.use("/opensource",projectRoute)















app.listen(3001, () => {

      console.log("server started")
})


