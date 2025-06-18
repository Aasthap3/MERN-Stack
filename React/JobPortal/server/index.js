import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./src/routes/authRouter.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter)

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Server!" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
