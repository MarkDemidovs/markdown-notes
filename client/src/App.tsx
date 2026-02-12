import { useEffect, useState } from "react";
import type { NoteType } from "./types/note";
import { getNotes, createNote } from "./api/notes";
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

  async function createNoteFunction(title: string, content: string) {
    try {
      const data = await createNote(title, content);
      setNotes(prev => [...prev, data]);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-6">Notes</h1>
        <button onClick={() => createNoteFunction("Click to edit me!", "This is a new note.")} className="rounded shadow border border-gray-300 p-2 w-8 h-8 flex items-center justify-center">+</button>
      </div>
      <div className="gap-6 flex">
        {notes.map(note => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
      </div>

    </div>
  );

}
