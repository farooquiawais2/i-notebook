import { useContext } from 'react';
import NoteContext from '../../context/note/NodeContext';
import NoteItem from '../NoteItem';
const Notes = () => {
  const context = useContext( NoteContext );
  const { notes } = context;
  return (
    <div className="container">
      <h1>Your notes</h1>
      <div className="row">
        {notes.map( ( i, index ) => {
          return <NoteItem note={i} key={index} />
        } )}
      </div>
    </div>
  );
}

export default Notes;