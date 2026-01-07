import { deleteNoteThunk } from "@/entities/notes/model/note.thunks"
import type { Note } from "@/entities/notes/model/note.types"
import { useAppDispatch } from "@/shared/lib/hooks"
import { Button } from "@mui/material"
import React from 'react'

type Props = {
    id: Note['id']
}

export default function DeleteNoteButton({id}: Props): React.JSX.Element {
    
    const dispatch = useAppDispatch();

    const clickHandler = (): void => {
        void dispatch(deleteNoteThunk(id))
    };

    return <Button onClick={clickHandler}>Удалить</Button>
}