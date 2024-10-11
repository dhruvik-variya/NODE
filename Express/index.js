const express = require('express');
const app = express();

app.get("/node",(req,res)=>{
  res.send("welcome to the node ");  
})

app.listen(4000,()=>{
    console.log("listening on port 4000");  
})

