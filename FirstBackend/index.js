import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Server Connected!");
  res.json({ message: "Hello I'm Backend" });
});

app.listen(5000, () => {
  console.log("Server Started!");
});
