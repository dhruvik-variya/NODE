const express = require('express');
const dbconnect = require('./db');

const User = require('./user.model');

const app = express();

// get data from frontend
app.use(express.json())
app.get("/node", async (req,res)=>{

    let data = await User.find();
    res.send(data);   

});

// post data to frontend
app.post("/node",async (req,res)=>{

    let data = await User.create(req.body)
    res.send(data);  

})

// connect to db
app.listen(4000,()=>{
    console.log("hello world"); 
    dbconnect();
});
