import z from 'zod';

export const NoteSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

export const NewNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
});