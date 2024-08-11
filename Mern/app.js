require("dotenv").config()
const express = require("express");
const app = express();
const router=require("./router/router");
const connectMongo = require("./utils/db");

app.use(express.json());
app.use('/api',router)

app.get("/exp", (req, res, next) => {
  res.send("Hello World!");
});

app.post("/sendexp", (req, res, next) => {
  console.log("req",req.body)
  let message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  console.log(`Message received: ${message}`);
  res.send(`Message sent: ${message}`);
});

const port = 5000;
  connectMongo().then(() =>{
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
  });
})
