import { Request, Response } from "express";
import pool from "../db";

interface CreateNoteBody {
  title: string;
  content: string;
}

export const getNotes = async (_req: Request, res: Response) => {
  try {
    const { rows } = await pool.query("SELECT * FROM notes");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong in the controller.",
    });
  }
};

export const createNote = async (
  req: Request<{}, {}, CreateNoteBody>,
  res: Response
) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const { rows } = await pool.query(
      "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );

    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Insert failed" });
  }
};
