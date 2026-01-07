
import NoteCard from '@/entities/ui/NoteCard';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { CardActions, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import DeleteNoteButton from '@/features/delete-note/ui/DeleteNoteButton'
import { fetchNoteThunk } from '@/entities/notes/model/note.thunks';

export default function MainPage(): React.JSX.Element {
  const notes = useAppSelector((store) => store.notes.notes);
  const error = useAppSelector((store) => store.notes.error)
  const loading = useAppSelector((store) => store.notes.loading)
  const dispatch = useAppDispatch() 

  useEffect(() => {
    void dispatch(fetchNoteThunk())
  }, [])

  return (
    <Container> 
        {error}
        {loading && 'load...'} 
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} size={4}>
            <NoteCard
              note={note}
              cardActions={
                <CardActions>
                  <DeleteNoteButton id={note.id} />
                </CardActions>
              }
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}