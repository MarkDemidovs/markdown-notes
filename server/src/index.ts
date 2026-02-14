import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use("/notes", notesRouter);

const port = Number(process.env.PORT) || 4000;


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
