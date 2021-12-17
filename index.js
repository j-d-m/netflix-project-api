const express = require("express");
const app = express();
require("dotenv").config();

//setting the port
const PORT = process.env.PORT;

app.get("/movies", (req, res) => {
  res.send("this is movies end point!");
});

app.get("/tv-shows", (req, res) => {
  res.send("This is TV Shows end point!");
});

//listening on the server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
