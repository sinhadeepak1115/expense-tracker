import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 5005;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
