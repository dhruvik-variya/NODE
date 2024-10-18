const mongoose = require('mongoose');
const dbconnect = async () =>{
    await mongoose.connect("mongodb+srv://dhruvikvariya:node11@cluster0.qe4di.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log("conntect to database");
    
}

module.exports = dbconnect;