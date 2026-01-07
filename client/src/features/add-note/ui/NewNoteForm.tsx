import { addNoteThunk } from "@/entities/notes/model/note.thunks";
import { NewNoteSchema } from "@/entities/notes/model/notes.schema";
import { useAppDispatch } from "@/shared/lib/hooks";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export default function NewNoteForm(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const validatedData = NewNoteSchema.parse(data);

    void dispatch(addNoteThunk(validatedData));
  };

  return (
    <Grid container spacing={2}>
      <form onSubmit={submitHandler}>
        <TextField label="title" variant="outlined" name="title" fullWidth />
        <TextField label="content" variant="outlined" name="content" fullWidth />
        <Button type="submit" fullWidth>
          Создать
        </Button>
      </form>
    </Grid>
  );
}