const mongoose = require("mongoose");


// add database
const TaskSchema = new mongoose.Schema({ 
    title:String,
    description:String,
    status:String,
});

const List = mongoose.model("List", TaskSchema);

module.exports = List;