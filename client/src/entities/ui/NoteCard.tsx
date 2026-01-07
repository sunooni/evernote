import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import type { Note } from '../notes/model/note.types';

type Props = {
  note: Note;
  cardActions: React.JSX.Element;
};

export default function NoteCard({ note, cardActions }: Props): React.JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography gutterBottom variant="h5" component="div">
        {note.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {note.content}
      </Typography>
      {cardActions}
    </Card>
  );
}
