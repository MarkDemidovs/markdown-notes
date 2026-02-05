import { Request, Response } from "express";
import pool from "../db";

export const getNotes = async (req: Request, res: Response) => {
    try {
        const { rows } = await pool.query("SELECT * FROM notes");      
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong in the controller."});
    }
}
export const createNote = async (req: Request, res: Response) => {
    const { title, content } = req.body;

    try {
        const { rows } = await pool.query(
            "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
            [title, content]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: "insert failed" });
    }
}

export const titleRenameNote = async (req: Request, res: Response) => {
    const { newTitle} = req.body;
    const { id } = req.params;

    try {
        const { rows } = await pool.query(
            "UPDATE notes SET title = $1 WHERE id = $2 RETURNING *",
            [newTitle, id]
        );

        if (rows.length === 0 ) {
            return res.status(404).json({ error: "Note not found!" });
        }
        res.status(200).json(rows[0])
    } catch (error) {
        res.status(500).json({ error: "title rename failed ";})
    }
}