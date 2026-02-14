import type { NoteType } from "../types/note"

async function apiFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {

  const res = await fetch(`http://localhost:4000${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {})
    },
    ...options
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}


export function getNotes(): Promise<NoteType[]> {
  return apiFetch<NoteType[]>("/notes");
}

export function createNote(title: string, content: string): Promise<NoteType> {
  return apiFetch<NoteType>("/notes", {
    method: "POST",
    body: JSON.stringify({ title, content })
  });
}

export function renameTitle(id: string, title: string): Promise<NoteType> {
  return apiFetch<NoteType>(`/notes/${id}/title`, {
    method: "PATCH",
    body: JSON.stringify({ title })
  });
}

export function renameContent(id: string, content: string): Promise<NoteType> {
  return apiFetch<NoteType>(`/notes/${id}/content`, {
    method: "PATCH",
    body: JSON.stringify({ content })
  });
}