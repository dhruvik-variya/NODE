const express = require("express");
const dbconnect = require("./db");
const List = require("./model");
const app = express();
const cors= require("cors");

app.use(express.json());

app.use(cors());  

app.get("/", async (req, res) => {
  let data = await List.find();
  res.send(data);
});
 


app.post("/", async (req, res) => {
  let data = await List.create(req.body);
  res.send(data);
});

app.patch("/:id", async (req, res) => {
  let { id } = req.params;
  let data = await List.findByIdAndUpdate(id, req.body, { new: true });
  res.send(data);
});


app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let data = await List.findByIdAndDelete(id);
  res.send(data);
});
app.listen(4000, () => {
  console.log("server listening on port 4000"); 
  dbconnect();
});
