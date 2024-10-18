const mongoose = require("mongoose");


// add database
const userSchema = new mongoose.Schema({

  username: String,
  email: String,
  password: String,


});

// create model and export it for use in other files
const User = mongoose.model("User", userSchema);

module.exports = User;