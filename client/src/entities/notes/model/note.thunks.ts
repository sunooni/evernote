import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotes, deleteNote, getNotes } from '../api/note.service';
import type { NewNote } from './note.types';

export const fetchNoteThunk = createAsyncThunk('note/fetch', async () => {
  const notes = await getNotes();
  return notes;
});

export const deleteNoteThunk = createAsyncThunk('notes/delete', async (id:number) => {
 await deleteNote(id);
return id;

})

export const addNoteThunk = createAsyncThunk('note/add', async (data: NewNote) => {
const result = await addNotes(data)
return result;
})
