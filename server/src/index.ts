import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(express.json());

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});