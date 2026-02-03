import { Request, Response } from "express";
import pool from "../db";

export const getNotes = async (req: Request, res: Response) => {
    try {
        const { rows } = await pool.query("SELECT * FROM notes");      
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
    } catch (error) {
        res.status(500).json({ error: "insert failed" });
    }
}
