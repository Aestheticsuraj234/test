const express = require("express");


const app = express();

app.get("/" , (req , res)=>{
    res.send("Hello world i am deployed")
})

app.listen(8080 , ()=>{
    console.log('Server Connected🐇')
})