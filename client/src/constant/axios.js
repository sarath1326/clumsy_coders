



import axios from "axios"


const baseurl="http://localhost:3001"


// "http://localhost:3001"

// "https://clumsy-coders-backend.onrender.com"




const instance=axios.create({

     baseURL:baseurl
})


export default instance



