import type z from 'zod';
import type { NewNoteSchema, NoteSchema } from './notes.schema';

export type Note = z.infer<typeof NoteSchema>;
export type NewNote = z.infer<typeof NewNoteSchema>;

export type NoteContextT = {
  Notes: Note[];
  dispatch: React.ActionDispatch<[action: NoteActions]>;
};

export type NoteActions =
  | { type: 'ADD'; payload: Note }
  | { type: 'DELETE'; payload: Note['id'] }
  | { type: 'SET'; payload: Note[] };

export type NoteState = {
  notes: Note[];
  error: string | null;
  loading: boolean;
};