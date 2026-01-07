import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { NoteState } from "./note.types";
import { addNoteThunk, deleteNoteThunk, fetchNoteThunk } from "./note.thunks";

const initialState: NoteState = {
    notes: [{
        id: 1,
        title: 'План на неделю',
        content: 'Понедельник: встреча с командой. Среда: завершить отчет. Пятница: отладка новой функции.',
      },
      {
        id: 2,
        title: 'Рецепт кофе',
        content: 'Эспрессо: 18г кофе, 36г воды, экстракция 28 секунд. Температура 92°C.',
    }],
    error: null,
    loading: false,
};

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        removeNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload)
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchNoteThunk.fulfilled, (state, action) => {
            state.notes = action.payload;
            state.loading = false;
        })
        .addCase(fetchNoteThunk.rejected, (state, action) => {
            state.error = action.error.message ?? 'Page not found';
            state.loading = false
        })
        .addCase(fetchNoteThunk.pending, (state, action) => {
            state.error = null;
            state.loading = true
        })
        builder.addCase(deleteNoteThunk.fulfilled, (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload)
        })

        builder.addCase(addNoteThunk.fulfilled, (state, action) => {
            state.notes.push(action.payload)
        })
    }
})

export const { removeNote } = noteSlice.actions;
export default noteSlice.reducer;