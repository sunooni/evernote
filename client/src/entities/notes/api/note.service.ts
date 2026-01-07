import axios from 'axios';
import { NoteSchema } from '../model/notes.schema';
import type { NewNote, Note } from '../model/note.types';



export async function getNotes(): Promise<Note[]> {
  const response = await axios.get('/api/notes');
  const notes = NoteSchema.array().parse(response.data);
  return notes;
}

export async function addNotes(newNote: NewNote): Promise<Note> {
  const response = await axios.post('/api/notes', newNote);
  const note = NoteSchema.parse(response.data);
  return note;
}

export async function deleteNote(id: Note['id']): Promise<void> {
  await axios.delete(`/api/notes/${id.toString()}`);
}