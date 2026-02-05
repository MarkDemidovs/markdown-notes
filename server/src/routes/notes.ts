import { Router } from "express";
import { getNotes, createNote, titleRenameNote, contentRenameNote } from "../controllers/notes";

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.patch("/:id/title", titleRenameNote)

export default router;
