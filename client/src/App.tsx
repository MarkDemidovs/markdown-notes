import { useEffect, useState } from "react";
import type { NoteType } from "./types/note";
import { getNotes } from "./api/notes";
import Note from "./Note";

export default function NotesPage() {

  const [notes, setNotes] = useState<NoteType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="grid gap-4">
        {notes.map(note => (
          <Note key={note.id} id={note.id} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );

}
