import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/notes", notesRouter);

const port = Number(process.env.PORT) || 4000;


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
