

const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
      origin: ["https://clumsy-coders.onrender.com"],
      methods: ["GET", "POST"],
      credentials: true
}));

// "https://clumsy-coders.onrender.com"



app.use("/", router);













app.listen(3001, () => {

      console.log("server started")
})


